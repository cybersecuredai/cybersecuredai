Branch protection recommendations

- Protect `main` branch with the following rules:
  - Require status checks to pass before merging; include the `CI` workflow.
  - Require at least one approving review before merge.
  - Dismiss stale pull request approvals when new commits are pushed.
  - Require conversations resolved before merge.
  - Restrict who can push to the branch (maintainers only).

How to enable (GitHub UI):
1. Go to the repository Settings -> Branches -> Branch protection rules.
2. Create a rule for `main` and enable the checks listed above.

Optional: use GitHub API or Terraform to enforce protection rules in automation.
