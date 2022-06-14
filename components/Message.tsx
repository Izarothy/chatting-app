import React from 'react';
import { MessageT } from '../types/Types';

type Props = {
  message: MessageT;
};
const Message: React.FC<Props> = ({ message }) => {
  return <div>{message.content}</div>;
};

export default Message;
