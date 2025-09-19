#!/bin/bash
set -euo pipefail
BRANCH=$(git rev-parse --abbrev-ref HEAD)
DATE=$(date +'%Y-%m-%d %H:%M:%S')
MSG="save: progress snapshot $DATE"

echo "Saving progress to $BRANCH..."
git add PROGRESS.md
# Optionally add other files you want to always save:
# git add <other files>
git commit -m "$MSG" || echo "Nothing to commit."
git push origin "$BRANCH"
echo "Progress saved and pushed to $BRANCH."#!/usr/bin/env bash
set -euo pipefail

BRANCH=$(git rev-parse --abbrev-ref HEAD)

git add PROGRESS.md || true
if git diff --staged --quiet; then
  echo "No changes to commit."
  exit 0
fi

git commit -m "chore: save progress snapshot (PROGRESS.md)"

echo "Pushing to origin/$BRANCH..."
git push origin "$BRANCH"

echo "Done."
