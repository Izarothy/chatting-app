import React, { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../lib/hooks';
import { AppDispatch } from '../redux/store';
import { useForm } from 'react-hook-form';
import { MemberT } from 'types/Types';

type Inputs = {
  content: string;
  channelID: string;
  author: MemberT;
};

const MessageInput = () => {
  const currentChannel = useAppSelector((state) => state.currentChannel.value);
  const currentMember = useAppSelector((state) => state.currentMember.value);
  const socket = useAppSelector((state) => state.socket.value);
  const dispatch: AppDispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm<Inputs>();

  const sendMessage = (data: Inputs) => {
    if (data.content.length < 1 || !currentMember) return;
    data.channelID = currentChannel.id;
    data.author = currentMember;

    socket!.emit('messages', data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(sendMessage)}>
      <input
        className="p-3 w-full border-l-4 border-yellow-600 bg-gray-800 outline-none text-white"
        type="text"
        placeholder={`Message ${currentChannel.name}`}
        {...register('content')}
      />
    </form>
  );
};

export default MessageInput;
