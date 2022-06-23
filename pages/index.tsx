import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/store';
import { io } from 'socket.io-client';

import ChannelList from '../components/ChannelList';
import ChatArea from '../components/ChatArea';
import ChatInfo from '../components/ChatInfo';
import MemberList from '../components/MemberList';
import MessageInput from '../components/MessageInput';
import LoginForm from 'components/LoginForm';

import { setChannels } from 'lib/channelsSlice';
import { fetchChannels } from '../lib/fetchChannels';
import initializeSocket from 'lib/initializeSocket';
import { setSocket } from 'lib/socketSlice';
import { addMessage } from 'lib/messagesSlice';
import { useAppSelector } from 'lib/hooks';
import fetchLocalStorage from 'lib/fetchLocalStorage';
import { setCurrentChannel } from 'lib/currentChannelSlice';

import channels from 'data/channels.json';
import { ChannelT } from '../types/Types';

const socket = io();

const Home: NextPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const currentMember = useAppSelector((state) => state.currentMember.value);

  useEffect(() => {
    initializeSocket().then((socket) => {
      dispatch(setSocket(socket));
    });

    fetchChannels().then((channels: ChannelT[]) => {
      dispatch(setChannels(channels));
    });

    let savedChannel: any = fetchLocalStorage('currentChannel');
    if (savedChannel) {
      dispatch(setCurrentChannel(JSON.parse(savedChannel)));
      return;
    }

    localStorage.setItem('currentChannel', JSON.stringify(channels[0]));
  }, []);

  socket.on('messages', (message) => {
    if (!currentMember) return;

    dispatch(
      addMessage({
        id: String(Math.random() * 9999999999),
        content: message.content,
        channelID: message.channelID,
        timestamp: Date.now(),
        author: currentMember,
      })
    );
  });

  return currentMember ? (
    <div>
      <Head>
        <title>Chatting App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="hidden md:flex max-h-screen overflow-hidden w-screen">
        <ChannelList />
        <div className="w-full flex flex-col">
          <ChatInfo />
          <ChatArea />
          <MessageInput />
        </div>
        <MemberList />
      </main>
      <main className="md:hidden bg-primary-dark grid place-items-center h-screen text-gray-100 font-bold text-xl">
        Sorry, this page isn't available for your device's resolution
      </main>
    </div>
  ) : (
    <LoginForm />
  );
};

export default Home;
export { socket };
