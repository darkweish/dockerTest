FROM node

COPY ./ /app

WORKDIR /app

RUN npm install && chmod +x wait-for-it.sh && chmod +x wait-for-mysql.sh

CMD ["./wait-for-it.sh","-t","40","db:3306","--","npm", "start"]

