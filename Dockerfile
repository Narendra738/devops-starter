# Stage 1: Build React App
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Retry & timeout configs to handle unstable npm registry
RUN npm config set fetch-retries 5 \
 && npm config set fetch-retry-mintimeout 20000 \
 && npm config set fetch-retry-maxtimeout 120000

# Copy package files first to leverage Docker cache
COPY package*.json ./

# Install dependencies with improved reliability
RUN npm install

# Copy the full source code
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy the production build from Stage 1
COPY --from=build /app/dist /usr/share/nginx/html

# Replace default nginx config with custom config (optional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
