type Budget = { limitUsd: number; usedUsd: number };

// In-memory budgets: key can be provider name or API key identifier
const budgets: Record<string, Budget> = {};

// Initialize or set budget for an identifier
export function setBudgetFor(id: string, limitUsd: number) {
  budgets[id] = { limitUsd, usedUsd: 0 };
}

export function getBudgetFor(id: string): Budget | null {
  return budgets[id] || null;
}

// Returns true if allowed, false if budget exceeded
export function consumeBudget(id: string, amountUsd: number): boolean {
  const b = budgets[id];
  if (!b) return true; // no budget configured -> treat as unlimited
  if (b.usedUsd + amountUsd > b.limitUsd) return false;
  b.usedUsd += amountUsd;
  return true;
}

// For testing and reset
export function resetBudgets() {
  for (const k of Object.keys(budgets)) budgets[k].usedUsd = 0;
}

export default { setBudgetFor, getBudgetFor, consumeBudget, resetBudgets };
