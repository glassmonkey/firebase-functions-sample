FROM node:lts-alpine

# カレントワーキングディレクトリとして 'app' フォルダを指定する
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080 9005
CMD ["/bin/ash"]
