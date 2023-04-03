FROM node:latest

WORKDIR /usr/myapp/back_end
COPY ./back_end .
RUN npm install

WORKDIR /usr/myapp/front_end
COPY ./front_end .

RUN npm install
RUN npm run build

RUN mv /usr/myapp/front_end/dist/* /usr/myapp/back_end/app/views


WORKDIR /usr/myapp/back_end

EXPOSE $BACK_END_PORT
CMD node server.js