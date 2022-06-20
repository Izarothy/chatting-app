import { setChannels } from 'lib/channelsSlice';
import { changeCurrentMember } from 'lib/currentMemberSlice';
import { setMembers } from 'lib/membersSlice';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/store';
import ChannelList from '../components/ChannelList';
import ChatArea from '../components/ChatArea';
import ChatInfo from '../components/ChatInfo';
import MemberList from '../components/MemberList';
import MessageInput from '../components/MessageInput';
import { fetchChannels } from '../lib/fetchChannels';
import { ChannelT } from '../types/Types';
import initializeSocket from 'lib/initializeSocket';
import { io, Socket } from 'socket.io-client';
import { setSocket } from 'lib/socketSlice';
import { addMessage } from 'lib/messagesSlice';
import { useAppSelector } from 'lib/hooks';
const socket = io();

const Home: NextPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const currentMember = useAppSelector((state) => state.currentMember.value);
  const currentChannel = useAppSelector((state) => state.currentChannel.value);
  useEffect(() => {
    initializeSocket().then((socket) => {
      dispatch(setSocket(socket));
    });

    const currentChannel: string =
      localStorage.getItem('currentChannel') || '100';

    if (localStorage.getItem('member')) {
      const currentMember = JSON.parse(
        JSON.stringify(localStorage.getItem('member'))
      );
      dispatch(setMembers(currentMember)); // for now, will move it to a database later
      dispatch(changeCurrentMember(currentMember));
    } else {
      const currentMember = {
        name: 'Guest',
        id: Math.floor(Math.random() * 9999999999),
      };
      localStorage.setItem('member', JSON.stringify(currentMember));

      dispatch(setMembers(currentMember));
      dispatch(changeCurrentMember(currentMember));
    }

    fetchChannels().then((channels: ChannelT[]) => {
      dispatch(setChannels(channels));
    });
  }, []);

  socket.on('messages', (message) => {
    dispatch(
      addMessage({
        id: Math.random() * 9999999999,
        content: message.content,
        channelID: currentChannel.id,
        timestamp: Date.now(),
        author: currentMember,
      })
    );
  });

  return (
    <div>
      <Head>
        <title>Chatting App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex max-h-screen overflow-hidden w-screen">
        <input onChange={(e) => socket.emit('messages', e.target.value)} />
        <ChannelList />
        <div className="w-full flex flex-col">
          <ChatInfo />
          <ChatArea />
          <MessageInput />
        </div>
        <MemberList />
      </main>
    </div>
  );
};

export default Home;
export { socket };
