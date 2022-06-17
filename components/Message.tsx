import React from 'react';
import { MessageT } from '../types/Types';

type Props = {
  message: MessageT;
};
const Message: React.FC<Props> = ({ message }) => {
  const messageDate = new Date(message.timestamp);

  const year = messageDate.getFullYear();
  const month = messageDate.getMonth() + 1;
  const day = messageDate.getDate();
  const hour = messageDate.getHours();
  const minute = messageDate.getMinutes();

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-3">
        <span className="font-semibold">{message.author.name}</span>
        <span>
          {day}/{month}/{year} {hour}:{minute}
        </span>
      </div>
      {message.content}
    </div>
  );
};

export default Message;
