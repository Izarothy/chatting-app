import React, { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../lib/hooks';
import { AppDispatch } from '../redux/store';
import { useForm } from 'react-hook-form';
import { addMessage } from '../lib/messagesSlice';
import { socket } from 'pages/index';

type Inputs = {
  content: string;
};

const MessageInput = () => {
  const currentChannel = useAppSelector((state) => state.currentChannel.value);
  const currentMember = useAppSelector((state) => state.currentMember.value);
  const socket = useAppSelector((state) => state.socket.value);
  const dispatch: AppDispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm<Inputs>();

  const sendMessage = (data: Inputs) => {
    if (data.content.length < 1) return;

    socket!.emit('messages', data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(sendMessage)}>
      <input
        className="p-3 w-full border-2 border-gray-700 bg-gray-600 outline-none text-gray-100"
        type="text"
        placeholder={`Message ${currentChannel.name}`}
        {...register('content')}
      />
    </form>
  );
};

export default MessageInput;
