# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install production dependencies
RUN npm install --production

# Copy the application code
COPY . .

# Build the application
RUN npm run build

# Serve the application with a lightweight server
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3000

# Command to serve the app
CMD ["serve", "-s", "build"]
