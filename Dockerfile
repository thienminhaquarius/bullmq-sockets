# Use Node.js base image
FROM node:18-alpine 

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json yarn.lock ./
RUN yarn install --production

# Copy application source code
COPY . .

# Ensure TypeScript is installed
RUN yarn add typescript

# Generate Prisma client
RUN npx prisma generate

# Build the application
RUN yarn run build

# Expose port.
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
