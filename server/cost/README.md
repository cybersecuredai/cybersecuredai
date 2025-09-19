Cost estimator & budget guard

Overview
- `cost-estimator.ts` provides simple per-provider cost estimates used to attach approximate USD cost to responses.
- `budget-guard.ts` implements an in-memory budget guard (for demo/testing). Configure per-provider or global budgets and the manager will refuse requests that would exceed the budget.

Configuration
- Set `BUDGET_SCOPE` to choose budget granularity: by default budgets are tracked per-provider name. You can set `BUDGET_SCOPE=global` and call `setBudgetFor('global', 10.0)` during startup to enforce a $10 budget.

Notes
- This is a lightweight, in-memory guard intended for early testing and demos. For production, replace with a persistent budget store (Redis, DB) and strong auth-based scope keys.
