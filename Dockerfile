# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./
COPY patches ./patches

# Install dependencies
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the project
RUN pnpm build

# Production stage
FROM nginx:alpine

# Copy built assets from builder stage
COPY --from=builder /app/dist/public /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

# Expose port (Railway sets PORT env var)
EXPOSE 80

# Start Nginx (envsubst is handled automatically by the nginx image when using templates)
CMD ["nginx", "-g", "daemon off;"]
