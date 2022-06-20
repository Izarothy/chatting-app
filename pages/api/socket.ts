import { NextApiRequest } from 'next';
import { NextApiResponseServerIO } from 'types/Types';
import { Server as ServerIO } from 'socket.io';

export default async (req: NextApiRequest, res: NextApiResponseServerIO) => {
  if (!res.socket.server.io) {
    console.log('Starting a new socket server');
    const socket = new ServerIO(res.socket.server);
    res.socket.server.io = socket;

    socket.on('connection', (socket) => {
      socket.on('messages', (msg) => {
        socket.broadcast.emit('messages', msg);
      });
    });
  }
  res.end();
};
