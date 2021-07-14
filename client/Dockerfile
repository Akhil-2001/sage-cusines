FROM node:10-alpine
# as build-step  
RUN mkdir /app  
WORKDIR /app  
COPY package.json /app  
RUN npm install  
COPY . /app 
RUN cd ./api
CMD ["npm","start"]
RUN cd ..
CMD ["npm","start"]
