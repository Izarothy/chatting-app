import React from 'react';
import { useAppSelector } from '../lib/hooks';

const ChatInfo = () => {
  const currentChannel = useAppSelector((state) => state.currentChannel.value);

  return (
    <div className="text-white w-full bg-purple-800 h-[5%] pl-4 py-2">
      <strong className="font-bold">{currentChannel.name}</strong>
    </div>
  );
};

export default ChatInfo;
