import { useAppSelector } from 'lib/hooks';
import React from 'react';
import { ChannelT } from '../types/Types';
import Channel from './Channel';

const ChannelList = () => {
  const channels = useAppSelector((state) => state.channels.value);
  return (
    <section className="flex flex-col gap-4 h-screen bg-slate-700 w-1/6 pt-8 pl-6">
      {channels?.map((channel: ChannelT) => (
        <Channel key={channel.id} name={channel.name} id={channel.id} />
      ))}
    </section>
  );
};

export default ChannelList;
