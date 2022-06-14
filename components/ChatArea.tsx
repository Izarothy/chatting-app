import React from 'react';
import Message from './Message';

const ChatArea = () => {
  const messages = Array(25).fill({ content: 'Test message' });
  return (
    <section className="h-full flex flex-col gap-4 p-4 overflow-scroll scrollbar-hide">
      {messages.map((message) => {
        return <Message message={message} />;
      })}
    </section>
  );
};

export default ChatArea;
