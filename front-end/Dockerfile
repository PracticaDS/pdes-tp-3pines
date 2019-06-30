FROM node:12.4.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN yarn global add serve

RUN yarn run build

EXPOSE 5000

CMD ["serve", "-s", "build"]