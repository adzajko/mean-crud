#!/bin/bash

echo Installing dependencies...

cd ./server && npm install 
cd ../ui && npm install 
cd ../

concurrently "npm run --prefix ./server start" "npm run --prefix ./ui start" --kill-others --kill-others-on-fail