#!/bin/bash
set -e

# Add common commands or configurations here
echo "Common setup..."

# Ensure Cypress is installed locally
if ! command -v ./node_modules/.bin/cypress &> /dev/null
then
    echo "Cypress could not be found. Installing Cypress..."
    npm install cypress --save-dev
    npx cypress install
fi

# Ensure cypress-ntlm-auth is installed locally
if ! command -v ./node_modules/.bin/cypress-ntlm-auth &> /dev/null
then
    echo "cypress-ntlm-auth could not be found. Installing cypress-ntlm-auth..."
    npm install cypress-ntlm-auth
fi

# Run Cypress with NTLM authentication, Chrome browser, and parallel execution
./node_modules/.bin/cypress-ntlm npx cypress-ntlm run --browser chrome --record --key ${CYPRESS_RECORD_KEY} --parallel --ci-build-id date +%s

# Note: We don't run k6 here as it is managed by another service
