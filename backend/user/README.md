# User Service

The user service handles user authentication, registration, and profile management.

## Features

- User registration and login
- JWT token authentication
- OTP verification
- User profile management
- Redis caching for sessions
- Message queuing for email notifications

## Tech Stack

- Node.js
- Express.js
- TypeScript
- MongoDB with Mongoose
- Redis
- JWT
- RabbitMQ (AMQP)

## Prerequisites

- Node.js (v18+)
- MongoDB
- Redis
- RabbitMQ

## Installation

```bash
cd backend/user
npm install
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=8001
MONGO_URI=mongodb://localhost:27017/userdb
JWT_SECRET=your_jwt_secret
REDIS_URL=redis://localhost:6379
RABBITMQ_URL=amqp://localhost
MAIL_SERVICE_URL=http://localhost:8003
```

## Running the Service

### Development

```bash
npm run dev
```

### Production

```bash
npm run build
npm start
```

## API Endpoints

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/verify-otp` - OTP verification
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `POST /api/auth/logout` - User logout

## Dependencies

- `express` - Web framework
- `mongoose` - MongoDB ODM
- `jsonwebtoken` - JWT authentication
- `redis` - Caching
- `amqplib` - RabbitMQ client
- `cors` - Cross-origin resource sharing
- `dotenv` - Environment variables
