FROM node:alpine

RUN npm install -g typescript

WORKDIR /server

COPY package.json .

RUN npm install

COPY . .

RUN tsc

RUN npx prisma generate

EXPOSE 8080

CMD [ "npm", "start" ]
