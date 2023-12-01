FROM node:alpine
WORKDIR /app
COPY . .
ENV MONGODB_URI='mongodb+srv://webdeads:1234@project-manager.yyqqiif.mongodb.net/?retryWrites=true&w=majority'
RUN npm install
EXPOSE 3000
CMD PORT=3000 npm start