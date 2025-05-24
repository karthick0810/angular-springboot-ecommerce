#!/bin/bash

aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 754450290666.dkr.ecr.us-east-1.amazonaws.com

cd frontend

git pull

docker build -t frontend:latest .

docker tag frontend:latest 754450290666.dkr.ecr.us-east-1.amazonaws.com/my-app/frontend:latest

docker push 754450290666.dkr.ecr.us-east-1.amazonaws.com/my-app/frontend:latest

docker rmi -f frontend:latest

docker rmi -f 754450290666.dkr.ecr.us-east-1.amazonaws.com/my-app/frontend:latest
