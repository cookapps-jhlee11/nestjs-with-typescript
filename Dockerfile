FROM node:16 AS builder
WORKDIR /app

COPY package* ./
RUN npm install

COPY . .
RUN npm run build


FROM node:16-alpine
WORKDIR /app

COPY package* ./
RUN npm install --production
COPY --from=builder /app/dist ./dist/

CMD ["npm", "run", "start:prod"]
