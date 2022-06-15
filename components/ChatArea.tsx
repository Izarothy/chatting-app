import React from 'react';
import { useAppSelector } from '../lib/hooks';
import Message from './Message';

const ChatArea = () => {
  const messages = useAppSelector((state) => state.messages.value);
  return (
    <section className="h-full flex flex-col gap-4 p-4 overflow-scroll scrollbar-hide">
      {messages.map((message) => {
        return <Message key={message.id} message={message} />;
      })}
    </section>
  );
};

export default ChatArea;
