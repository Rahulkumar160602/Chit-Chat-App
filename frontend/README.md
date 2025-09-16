# Chat App Frontend

The frontend of the real-time chat application built with Next.js.

## Features

- Real-time chat interface
- User authentication (login/register)
- OTP verification
- Chat room management
- File upload and sharing
- Responsive design with Tailwind CSS

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Socket.io Client
- Axios
- React Hot Toast
- Lucide React (icons)

## Prerequisites

- Node.js (v18+)
- Backend services running

## Installation

```bash
cd frontend
npm install
```

## Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:8001
NEXT_PUBLIC_CHAT_URL=http://localhost:8000
```

## Running the Application

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production

```bash
npm run build
npm start
```

## Project Structure

- `app/` - Next.js app router pages
  - `page.tsx` - Home page
  - `login/` - Login page
  - `verify/` - OTP verification page
  - `chat/` - Chat interface
- `components/` - Reusable React components
  - `ChatHeader.tsx` - Chat header
  - `ChatMessages.tsx` - Message display
  - `ChatSidebar.tsx` - Chat list sidebar
  - `MessageInput.tsx` - Message input form
  - `VerifyOtp.tsx` - OTP verification component
- `context/` - React context providers
  - `AppContext.tsx` - App state management
  - `SocketContext.tsx` - Socket.io connection

## Dependencies

- `next` - React framework
- `react` - UI library
- `socket.io-client` - Real-time communication
- `axios` - HTTP client
- `js-cookie` - Cookie management
- `react-hot-toast` - Toast notifications
- `lucide-react` - Icon library
- `moment` - Date formatting
