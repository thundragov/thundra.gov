#!/bin/bash

# Exit if any command fails
set -e

# Check if a commit message was passed
if [ -z "$1" ]; then
  echo "Commit message required."
  echo "Usage: ./deploy.sh \"Your commit message here\""
  exit 1
fi

MESSAGE=$1

echo "Committing root project..."
git add .
git commit -m "$MESSAGE"

echo "Building project..."
npm run build

cd dist

echo "Committing dist folder..."
git add .
git commit -m "$MESSAGE"
git push

cd ..

echo "Deploy script completed."