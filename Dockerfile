# Use Node.js 18 for both build and production stages
FROM node:18-alpine as build

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the application
RUN npm run build

# # Use the same Node.js 18 base image for the production stage
# FROM node:18-alpine

# # Set working directory in the container
# WORKDIR /app

# # Copy built files from the previous stage to the container
# COPY --from=build /app/.next ./.next
# COPY --from=build /app/public ./public

# Expose port 3000
EXPOSE 3000

# Run the Next.js application in production mode
CMD ["npm", "start"]
