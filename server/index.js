import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import { setupSocketHandlers } from './socketHandler.js';
import { PORT } from './config.js';

const app = express();
app.use(cors());

const httpServer = createServer(app);
const io = new Server(httpServer, { // servidor WebSocket
  cors: {
    origin: "*", 
    methods: ["GET", "POST"]
  }
});

setupSocketHandlers(io);

httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});