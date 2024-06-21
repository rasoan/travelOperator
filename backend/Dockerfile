FROM node:20.14.0

# set a directory for the app
WORKDIR /traveloperator

# copy all the files to the container
COPY . .

# install dependencies
RUN npm install -g pnpm
RUN pnpm install

# define the port number the container should expose
EXPOSE 8080
