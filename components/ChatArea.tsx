import React from 'react';
import { useAppSelector } from '../lib/hooks';
import Message from './Message';

const ChatArea = () => {
  const allMessages = useAppSelector((state) => state.messages.value);
  const currentChannel = useAppSelector((state) => state.currentChannel.value);
  const messages = allMessages.filter(
    (message) => message.channelID === currentChannel.id
  );
  return (
    <section className=" h-full flex flex-col gap-4 p-4 overflow-scroll scrollbar-hide bg-gray-700 text-gray-100">
      {messages.map((message) => {
        return <Message key={message.id} message={message} />;
      })}
    </section>
  );
};

export default ChatArea;
