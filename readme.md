# Full Stack Application

This project consists of a React frontend and a NestJS backend with MongoDB as the database.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Running with Docker](#running-with-docker)
3. [Running Directly](#running-directly)
4. [Environment Variables](#environment-variables)
5. [Accessing the Application](#accessing-the-application)
6. [Troubleshooting](#troubleshooting)

## Prerequisites

- Node.js (v20.4.0 or later)
- npm (v8 or later)
- Docker and Docker Compose (for Docker method)
- MongoDB (for direct method)

## Running with Docker

1. Clone the repository:
   ```
   git clone <repository-url>
   cd <project-directory>
   ```

2. Create `.env` files for both frontend and backend (see [Environment Variables](#environment-variables) section).

3. Build and start the containers:
   ```
   docker-compose up --build
   ```

4. The application will be available at:
   - Frontend: http://localhost:5173
   - Backend: http://localhost:4000
   - MongoDB: mongodb://localhost:27017

To stop the application:
```
docker-compose down
```

## Running Directly

### Backend

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables (see [Environment Variables](#environment-variables) section).

4. Start the backend:
   ```
   npm run start:dev
   ```

The backend will be available at http://localhost:4000.

### Frontend

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables (see [Environment Variables](#environment-variables) section).

4. Start the frontend:
   ```
   npm run dev
   ```

The frontend will be available at http://localhost:5173.

### Database

Ensure MongoDB is installed and running on your system. The default connection URL is `mongodb://localhost:27017/easy-generator`.

## Environment Variables

### Backend (.env file in backend directory)
```
HTTP_PORT=4000
DATABASE_URI=mongodb://localhost:27017/easy-generator
AUTH_TOKEN_SECRET=your_secret_key
ACCESS_TOKEN_EXPIRATION="10h"
```

### Frontend (.env file in frontend directory)
```
VITE_APP_SERVER_URL=http://localhost:4000/graphql
VITE_APP_AUTH_TOKEN_COOKIE_EXPIRES="1h"
```

## Accessing the Application

- Frontend: Open http://localhost:5173 in your web browser.
- GraphQL Playground (if enabled): http://localhost:4000/graphql

## Troubleshooting

- If you encounter any issues with Docker, try removing all containers, images, and volumes:
  ```
  docker-compose down --rmi all --volumes
  ```
  Then rebuild:
  ```
  docker-compose up --build
  ```

- For direct running, ensure MongoDB is running and accessible.

- Check the console outputs for any error messages.

- Verify that all required environment variables are set correctly.

- Ensure all required ports are free and not used by other applications.

For any other issues, please check the application logs or create an issue in the project repository.

## Contact

For any questions or concerns regarding this project, please contact:

Usama Tahir - usama.tahir116@gmail.com