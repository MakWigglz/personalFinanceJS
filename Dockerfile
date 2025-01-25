# Dockerfile
### This Dockerfile sets up a Node.js development environment for a web application. It performs the following steps:

### Sets the base image to the latest Node.js 16 runtime.
### Sets the working directory to `/app`.
###  Copies the `package*.json` files to the working directory and installs the project dependencies using `npm install`.
### Copies the entire project directory to the working directory.
### Exposes port 3000 for the web application to listen on.
### Runs the `npm start` command to start the web application.  

FROM node:16

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "start"]
