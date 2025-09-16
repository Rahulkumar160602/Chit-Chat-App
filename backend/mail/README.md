# Mail Service

The mail service handles email notifications and OTP sending using RabbitMQ for message queuing.

## Features

- Send OTP emails for verification
- Email notifications
- Message queuing with RabbitMQ
- Asynchronous email processing

## Tech Stack

- Node.js
- Express.js
- TypeScript
- Nodemailer
- RabbitMQ (AMQP)

## Prerequisites

- Node.js (v18+)
- RabbitMQ server

## Installation

```bash
cd backend/mail
npm install
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=8003
RABBITMQ_URL=amqp://localhost
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
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

## Message Queue

The service listens to RabbitMQ queues for email requests:

- `email-queue` - Queue for email sending requests

## Email Templates

Currently supports:
- OTP verification emails
- General notification emails

## Dependencies

- `express` - Web framework
- `nodemailer` - Email sending
- `amqplib` - RabbitMQ client
- `dotenv` - Environment variables
