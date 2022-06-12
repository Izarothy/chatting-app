import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import SideBar from '../components/SideBar';

const Home: NextPage = () => {
  return (
    <div className="flex">
      <Head>
        <title>Chatting App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-h-screen overflow-hidden w-screen">
        <SideBar chatRooms={Array(25).fill({ name: 'x', image: '/default' })} />
      </main>
    </div>
  );
};

export default Home;
