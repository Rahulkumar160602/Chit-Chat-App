import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { createClient } from "redis";
import userRoutes from './routes/user.js';
import { connectRabbitMQ } from './config/rabbitmq.js';
import cors from 'cors';

dotenv.config();

connectDB();
connectRabbitMQ();

const redisUrl = process.env.REDIS_URL;
if (!redisUrl) {
  throw new Error('REDIS_URL is not defined in the environment variables');
}

export const redisClient = createClient({ url: redisUrl });
redisClient.connect()
  .then(() => console.log("Redis connected successfully"))
  .catch((error) => console.error("Redis connection failed:", error));

const app = express();

// ✅ CORS middleware BEFORE routes
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(express.json());

// Routes
app.use("/api/v1", userRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
