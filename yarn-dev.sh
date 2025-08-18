#!/bin/bash

# Source nvm if it exists
if [ -f "$HOME/.nvm/nvm.sh" ]; then
    source "$HOME/.nvm/nvm.sh"
    nvm use
elif [ -f "/usr/local/share/nvm/nvm.sh" ]; then
    source "/usr/local/share/nvm/nvm.sh"
    nvm use
else
    echo "Warning: nvm not found, using system Node.js"
fi

# Check if yarn is available, fallback to npm
if command -v yarn >/dev/null 2>&1; then
    NODE_OPTIONS=--max-old-space-size=10192 yarn develop
elif command -v npm >/dev/null 2>&1; then
    echo "yarn not found, using npm instead"
    NODE_OPTIONS=--max-old-space-size=10192 npm run develop
else
    echo "Error: Neither yarn nor npm found. Please install Node.js package manager."
    exit 1
fi
