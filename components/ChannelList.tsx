import React from 'react';
import { Channel } from '../types/Types';

type Props = {
  channels: Channel[];
};

const ChannelList: React.FC<Props> = ({ channels }) => {
  return (
    <section className="flex flex-col gap-4 h-full bg-purple-800 w-1/6 pt-8 pl-6">
      {channels.map((channel: Channel) => (
        <a className="text-white text-lg cursor-pointer">
          <strong className="font-bold mr-4">•</strong>
          {channel.name}
        </a>
      ))}
    </section>
  );
};

export default ChannelList;
