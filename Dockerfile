# Use a lighter version of Node as a parent image
FROM node:18.16.1

#
# Build Front End
#
# Set the working directory to /client
WORKDIR /client
# copy package.json into the container at /client
COPY package*.json /client/
# install dependencies
RUN npm install
# build
RUN npm run build
# Copy the current directory contents into the container at /client
COPY ./client/build /client/build

###################################
#
# Build Server
#
# Set the working directory to /api
WORKDIR /
# copy package.json into the container at /api
COPY package*.json .
# install dependencies
RUN npm install
# build
RUN npm run build
# Copy the current directory contents into the container at /api
COPY . .
# Make port available to the world outside this container
EXPOSE 5000

# Run the app when the container launches
CMD ["node", "dist/src/main"]