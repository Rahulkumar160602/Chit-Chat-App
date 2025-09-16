import amqp from 'amqplib';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export const startSendOtpConsumer = async () => {
  try {
    const connection = await amqp.connect({
      protocol: 'amqp',
      hostname: process.env.Rabbitmq_Host,
      port: 5672,
      username: process.env.Rabbitmq_Username,
      password: process.env.Rabbitmq_Password,
    });

    const channel = await connection.createChannel();
    const queueName = 'send-Otp';
    await channel.assertQueue(queueName, { durable: true });

    console.log('✅ Mail service consumer started, listening for OTP emails...');

    channel.consume(queueName, async (msg) => {
      if (msg) {
        try {
          const { to, subject, body } = JSON.parse(msg.content.toString());

          const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
             // <-- Add this for Gmail with port 465
            auth: {
              user: process.env.USER,
              pass: process.env.PASSWORD,
            },
          });

          await transporter.sendMail({
            from: `"Chat App" <${process.env.USER}>`,
            to,
            subject,
            text: body,
          });

          console.log(`✅ OTP sent to ${to}`);
          channel.ack(msg);
        } catch (error) {
          console.error('❌ Failed to send OTP:', error);
        }
      }
    });
  } catch (err) {
    console.error('❌ Failed to start OTP consumer:', err);
  }
};
