# Chat Service

The chat service handles real-time messaging, file uploads, and chat room management.

## Features

- Real-time messaging with Socket.io
- File upload to Cloudinary
- Chat room creation and management
- Message history
- User authentication via JWT

## Tech Stack

- Node.js
- Express.js
- TypeScript
- Socket.io
- MongoDB with Mongoose
- Cloudinary
- JWT

## Prerequisites

- Node.js (v18+)
- MongoDB
- Cloudinary account

## Installation

```bash
cd backend/chat
npm install
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=8000
MONGO_URI=mongodb://localhost:27017/chatdb
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
USER_SERVICE_URL=http://localhost:8001
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

- `GET /api/chats` - Get user's chats
- `POST /api/chats` - Create new chat
- `GET /api/chats/:id/messages` - Get chat messages
- `POST /api/chats/:id/messages` - Send message
- `POST /api/upload` - Upload file

## Socket Events

- `join-chat` - Join a chat room
- `send-message` - Send a message
- `receive-message` - Receive a message
- `user-joined` - User joined the chat
- `user-left` - User left the chat

## Dependencies

- `express` - Web framework
- `socket.io` - Real-time communication
- `mongoose` - MongoDB ODM
- `cloudinary` - File storage
- `jsonwebtoken` - JWT authentication
- `multer` - File upload middleware
- `cors` - Cross-origin resource sharing
