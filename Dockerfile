# # Use an official Node.js runtime as the base image
# FROM node:16

# # Set the working directory in the container
# WORKDIR /app

# # Copy package.json and package-lock.json files
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Build the application for production
# RUN npm run build

# # Serve the application using a lightweight web server
# RUN npm install -g serve

# # Expose the port the app runs on
# EXPOSE 3000

# # Command to run the application
# CMD ["serve", "-s", "build"]
