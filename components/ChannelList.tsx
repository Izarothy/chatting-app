import React from 'react';
import { ChannelT } from '../types/Types';
import Channel from './Channel';

type Props = {
  channels: ChannelT[];
};

const ChannelList: React.FC<Props> = ({ channels }) => {
  return (
    <section className="flex flex-col gap-4 h-full bg-purple-800 w-1/6 pt-8 pl-6">
      {channels.map((channel: ChannelT) => (
        <Channel name={channel.name} />
      ))}
    </section>
  );
};

export default ChannelList;