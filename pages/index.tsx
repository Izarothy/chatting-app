import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import ChannelList from '../components/ChannelList';
import SideBar from '../components/SideBar';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Chatting App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex max-h-screen overflow-hidden w-screen">
        <SideBar chatRooms={Array(25).fill({ name: 'x', image: '/default' })} />
        <ChannelList
          channels={Array(25).fill({ name: 'chat', id: 5, isText: true })}
        />
      </main>
    </div>
  );
};

export default Home;
