import React from 'react';

const ChatArea = () => {
  const messages = Array(25).fill({ message: 'Test message' });
  return (
    <section className="h-full flex flex-col gap-4 p-4 overflow-scroll scrollbar-hide">
      {messages.map((message) => {
        return <div>{message.message}</div>;
      })}
    </section>
  );
};

export default ChatArea;
