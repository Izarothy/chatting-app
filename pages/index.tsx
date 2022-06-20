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
import fetchLocalStorage from 'lib/fetchLocalStorage';
import { setCurrentChannel } from 'lib/currentChannelSlice';
import channels from 'data/channels.json';

const socket = io();

const Home: NextPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const currentMember = useAppSelector((state) => state.currentMember.value);
  const currentChannel = useAppSelector((state) => state.currentChannel.value);

  useEffect(() => {
    initializeSocket().then((socket) => {
      dispatch(setSocket(socket));
    });

    fetchChannels().then((channels: ChannelT[]) => {
      dispatch(setChannels(channels));
    });

    let savedChannel: any = fetchLocalStorage('currentChannel');
    if (savedChannel) {
      console.log(savedChannel);
      dispatch(setCurrentChannel(savedChannel));
      return;
    }

    localStorage.setItem('currentChannel', JSON.stringify(channels[0]));
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
