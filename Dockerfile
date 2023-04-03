FROM node:latest

WORKDIR /usr/myapp/back_end
COPY . .
RUN npm install

WORKDIR /usr/myapp/front_end
COPY . .
RUN npm install


RUN npm run build

COPY  /usr/myapp/front_end/dist /usr/myapp/back_end/app


WORKDIR /usr/myapp/back_end

EXPOSE $BACK_END_PORT
CMD node server.js