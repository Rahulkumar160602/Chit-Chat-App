# Chat App

A full-stack real-time chat application built with microservices architecture.

## Project Structure

This project consists of multiple services:

- **frontend/**: Next.js web application for the user interface
- **backend/chat/**: Chat service handling real-time messaging and file uploads
- **backend/user/**: User management service for authentication and user data
- **backend/mail/**: Email service for sending notifications and OTPs

## Tech Stack

### Frontend
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Socket.io Client
- Axios

### Backend Services
- Node.js with Express.js
- TypeScript
- MongoDB with Mongoose
- Socket.io for real-time communication
- RabbitMQ for message queuing
- Redis for caching
- Cloudinary for file storage
- JWT for authentication

## Prerequisites

- Node.js (v18 or higher)
- MongoDB
- RabbitMQ
- Redis
- Cloudinary account (for file uploads)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-github-repo-url>
cd chat-app
```

### 2. Install Dependencies

Install dependencies for all services:

```bash
# Frontend
cd frontend
npm install

# Chat Service
cd ../backend/chat
npm install

# User Service
cd ../backend/user
npm install

# Mail Service
cd ../backend/mail
npm install
```

### 3. Environment Variables

Create `.env` files in each backend service directory with the required environment variables. Refer to the individual service READMEs for specific variables.

### 4. Start Services

Start each service in separate terminals:

```bash
# Frontend (from frontend directory)
npm run dev

# Chat Service (from backend/chat directory)
npm run dev

# User Service (from backend/user directory)
npm run dev

# Mail Service (from backend/mail directory)
npm run dev
```

### 5. Access the Application

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

- Use `npm run dev` for development with hot reloading
- Use `npm run build` to build for production
- Use `npm start` to run production builds

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.
