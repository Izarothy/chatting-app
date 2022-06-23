import { NextApiResponse } from 'next';
import { Server as NetServer, Socket } from 'net';
import { Server as SocketIOServer } from 'socket.io';

export type ChannelT = {
  id: string;
  name: string;
  isText: boolean;
};

export type MessageT = {
  id: string;
  content: string;
  channelID: string;
  timestamp: number;
  author: MemberT;
};

export type MemberT = {
  id: string;
  name: string;
  avatar?: string;
};

export type NextApiResponseServerIO = NextApiResponse & {
  socket: Socket & {
    server: NetServer & {
      io: SocketIOServer;
    };
  };
};

export type storedTypes = MemberT | ChannelT | null;
