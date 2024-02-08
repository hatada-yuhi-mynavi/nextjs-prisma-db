FROM node:latest

RUN apt update
WORKDIR /app
COPY . /app/
RUN npm install
