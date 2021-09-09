FROM node

COPY ./ /app

WORKDIR /app

RUN npm install && chmod +x wait-for-it.sh

CMD ["./wait-for-it.sh","db:3306","--","npm", "start"]

