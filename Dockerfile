# Use an official Node runtime as the base image
FROM node:21

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json, package-lock.json, and yarn.lock to the working directory
COPY package*.json yarn.lock ./

# Install the Expo CLI
RUN yarn global add expo-cli

# Install any needed packages specified in package.json
RUN yarn install

# Bundle app source
COPY . .

# Make port 8081 available to the world outside this container
EXPOSE 8081

# Run the app when the container launches
CMD ["yarn", "start"]
