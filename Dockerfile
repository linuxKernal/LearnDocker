FROM node
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./
ENV PORT 3000
CMD ["npm","run","dev"]
EXPOSE 3000