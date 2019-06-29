FROM node:12.4.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5000

RUN yarn add global serve

CMD ["serve", "-s", "build"]