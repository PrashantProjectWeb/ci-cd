FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev

FROM node:22-alpine
WORKDIR /app
RUN rm -rf /usr/local/lib/node_modules/npm /usr/local/bin/npm /usr/local/bin/npx /opt/yarn-v*
COPY --from=build /app/node_modules ./node_modules
COPY src ./src
EXPOSE 3000
CMD ["node", "src/server.js"]
