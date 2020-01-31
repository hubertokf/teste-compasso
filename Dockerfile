FROM node:latest

# Prepare app directory
RUN mkdir -p /app
WORKDIR /app

# Install dependencies
COPY package.json /app
RUN npm install

ADD . /app

# Start server
CMD [ "npm", "start" ]