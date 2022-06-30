#!/bin/bash

# Build the UI 
cd ./ui
npm run build

# Add the built UI to the deployment
cd ../
git add .
git commit -m "Automatic Deployment commit"

# Deploy to Heroku
git push heroku main