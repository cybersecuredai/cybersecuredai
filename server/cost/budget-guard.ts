git push -u origin feature/adapters-stubstype Budget = { limitUsd: number; usedUsd: number };

// In-memory budgets: key can be provider name or API key identifier
const budgets: Record<string, Budget> = {};

// Lazy Redis client (ioredis) when REDIS_URL is provided
let RedisClient: any = null;
let redis: any = null;
if (process.env.REDIS_URL) {
  try {
    // require lazily so tests or environments without ioredis don't fail
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    RedisClient = require('ioredis');
    redis = new RedisClient.default ? new RedisClient.default(process.env.REDIS_URL) : new RedisClient(process.env.REDIS_URL);
  } catch (e) {
    // if ioredis is not installed or cannot connect, fall back to in-memory
    // console.warn('Redis not available for budget guard, using in-memory fallback');
    redis = null;
  }
}

// Initialize or set budget for an identifier
export function setBudgetFor(id: string, limitUsd: number) {
  budgets[id] = { limitUsd, usedUsd: 0 };
  // also persist the limit in redis for visibility if available
  if (redis) {
    try {
      redis.hset(`budget:${id}`, 'limitUsd', String(limitUsd));
      redis.hset(`budget:${id}`, 'usedUsd', '0');
    } catch (e) {
      // ignore redis errors silently; in worst case we use in-memory
    }
  }
}

export function getBudgetFor(id: string): Budget | null {
  const b = budgets[id];
  if (b) return b;
  return null;
}

// Returns true if allowed, false if budget exceeded
export function consumeBudget(id: string, amountUsd: number): boolean {
  // If Redis is configured, use an atomic script: watch/hincrbyfloat pattern
  if (redis) {
    try {
      // We'll store limitUsd and usedUsd in a hash at budget:{id}
      const key = `budget:${id}`;
      // Fetch current values
      return redis.eval(
        // Lua: read limit and used, if no limit treat as unlimited (return 1), else if used+amount>limit return 0, else increment used and return 1
        `local limit = redis.call('HGET', KEYS[1], 'limitUsd')
         if not limit then
           return 1
         end
         local used = redis.call('HGET', KEYS[1], 'usedUsd')
         if not used then used = '0' end
         local limitNum = tonumber(limit)
         local usedNum = tonumber(used)
         local add = tonumber(ARGV[1])
         if (usedNum + add) > limitNum then
           return 0
         end
         local newUsed = usedNum + add
         redis.call('HSET', KEYS[1], 'usedUsd', tostring(newUsed))
         return 1`,
        1,
        key,
        String(amountUsd),
      ).then((res: number) => res === 1).catch(() => true);
    } catch (e) {
      // on any redis error, fallback to in-memory logic
    }
  }

  const b = budgets[id];
  if (!b) return true; // no budget configured -> treat as unlimited
  if (b.usedUsd + amountUsd > b.limitUsd) return false;
  b.usedUsd += amountUsd;
  return true;
}

// For testing and reset
export function resetBudgets() {
  for (const k of Object.keys(budgets)) budgets[k].usedUsd = 0;
  if (redis) {
    try {
      // clear redis hashes for known budgets
      for (const k of Object.keys(budgets)) {
        redis.hset(`budget:${k}`, 'usedUsd', '0');
      }
    } catch (e) {
      // ignore
    }
  }
}

export function listBudgets() {
  return { ...budgets };
}

export default { setBudgetFor, getBudgetFor, consumeBudget, resetBudgets, listBudgets };
