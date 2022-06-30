#!/bin/bash

cd ./ui
npm run build
cd ../
git add .
git commit -m "Deploy"
git push heroku main