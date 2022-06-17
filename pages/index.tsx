import { setChannels } from 'lib/channelsSlice';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/store';
import ChannelList from '../components/ChannelList';
import ChatArea from '../components/ChatArea';
import ChatInfo from '../components/ChatInfo';
import MemberList from '../components/MemberList';
import MessageInput from '../components/MessageInput';
import { fetchChannels } from '../lib/fetchChannels';
import { ChannelT, MemberT } from '../types/Types';

const Home: NextPage = () => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    const currentChannel: string =
      localStorage.getItem('currentChannel') || '100';
    // const currentMember: MemberT = localStorage.getItem('member') || '{}';

    fetchChannels().then((channels: ChannelT[]) => {
      dispatch(setChannels(channels));
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Chatting App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex max-h-screen overflow-hidden w-screen">
        <ChannelList />
        <div className="w-full flex flex-col">
          <ChatInfo />
          <ChatArea />
          <MessageInput />
        </div>
        <MemberList members={Array(15).fill({ name: 'chatter' })} />
      </main>
    </div>
  );
};

export default Home;
