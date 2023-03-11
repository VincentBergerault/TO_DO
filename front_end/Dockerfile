FROM node:latest

RUN npm install -g http-server

WORKDIR /usr/myapp/
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080

RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]