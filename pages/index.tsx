import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import ChannelList from '../components/ChannelList';
import ChatArea from '../components/ChatArea';
import ChatInfo from '../components/ChatInfo';
import SideBar from '../components/SideBar';
import { useAppSelector } from '../lib/hooks';

const Home: NextPage = () => {
  const currentChannel = useAppSelector((state) => state.currentChannel.value);
  return (
    <div>
      <Head>
        <title>Chatting App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex max-h-screen overflow-hidden w-screen">
        <SideBar chatRooms={Array(25).fill({ name: 'x', image: '/default' })} />
        <ChannelList
          channels={[
            ...Array(15).fill({ name: 'chat', id: 5, isText: true }),
            { name: 'chat2', id: 1, isText: true },
          ]}
        />
        <div className="w-full flex flex-col pb-4">
          <ChatInfo />
          <ChatArea />
        </div>
      </main>
    </div>
  );
};

export default Home;
