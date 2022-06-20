import { io } from 'socket.io-client';

const initializeSocket = async () => {
  await fetch('/api/socket');
  const socket = io();

  socket.on('connect', () => {
    console.log('Connected socked with an ID of', socket.id);
  });

  return socket;
};

export default initializeSocket;
