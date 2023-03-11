FROM node:latest

WORKDIR /usr/myapp/
COPY . .
RUN npm install

EXPOSE 5010

CMD node server.js