import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import ChannelList from '../components/ChannelList';
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
            { name: 'chat2', id: 5, isText: true },
          ]}
        />
        {currentChannel.name}
        ID: {currentChannel.id}
      </main>
    </div>
  );
};

export default Home;
