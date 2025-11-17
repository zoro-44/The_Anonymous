# Use Node.js 18 (not 14!!)
FROM node:18

# Working directory
WORKDIR /usr/src/app

# Copy package.json
COPY package.json .

# Install dependencies
RUN npm install

# Copy rest of the app
COPY . .

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "start"]
