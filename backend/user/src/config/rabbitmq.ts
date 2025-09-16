import amql from 'amqplib';

let channel: amql.Channel;

export const connectRabbitMQ = async () => {
  try {
    const connection = await amql.connect({
    protocol: "amqp",
    hostname: process.env.Rabbitmq_Host,
    port: 5672,
    username: process.env.Rabbitmq_Username,
    password: process.env.Rabbitmq_Password,
  });

  channel = await connection.createChannel();
  console.log('RabbitMQ connected successfully');
  } catch (error) {
    console.error('failed connecting to RabbitMQ:', error);
    throw error;
  }
};

export const publishToQueue = async (queueName: string, message: any) => {
  if (!channel) {
    throw new Error('RabbitMQ channel is not initialized');
  }

  try {
    await channel.assertQueue(queueName, { durable: true });
    channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)), {
      persistent: true,
    });
    console.log(`Message sent to queue ${queueName}`);
  } catch (error) {
    console.error(`Failed to send message to queue ${queueName}:`, error);
  }
};