FROM node:alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .
RUN npm run build

FROM node:alpine

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules

RUN chown -R appuser:appgroup /app

USER appuser

EXPOSE 3000
CMD ["node", "dist/app.js"]
