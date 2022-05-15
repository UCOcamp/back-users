FROM node:16-alpine as ucocamp-users

ADD package.json .

ADD package-lock.json .

RUN npm i --legacy-peer-deps

ADD . .

EXPOSE ${PORT}

CMD npm run start