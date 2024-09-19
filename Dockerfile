# Use the official Node.js image as the base

FROM node:22.9.0-alpine3.19

# Set the working directory in the container

WORKDIR /home/reactCRM

RUN mkdir -p /home/ReactCRM
# Copy package.json and package-lock.json

COPY ./reactCRM/package*.json ./

# Install dependencies
RUN npm config set strict-ssl false
RUN npm install --no-package-lock
RUN npm install recharts@latest
RUN npm install react-dom@latest
RUN npm install react-router-dom@latest

# Copy the rest of the application code

COPY ./reactCRM ./

# Expose the port your app listens on

EXPOSE 3000

# Start the Node.js application

CMD [ "npm", "start" ]