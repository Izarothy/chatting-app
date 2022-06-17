import React, { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../lib/hooks';
import { AppDispatch } from '../redux/store';
import { useForm } from 'react-hook-form';
import { addMessage } from '../lib/messagesSlice';

type Inputs = {
  content: string;
};

const MessageInput = () => {
  const currentChannel = useAppSelector((state) => state.currentChannel.value);
  const currentMember = useAppSelector((state) => state.currentMember.value);
  const dispatch: AppDispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm<Inputs>();

  const sendMessage = (data: Inputs) => {
    dispatch(
      addMessage({
        id: Math.random() * 9999999999,
        content: data.content,
        channelID: currentChannel.id,
        timestamp: Date.now(),
        author: currentMember,
      })
    );
    reset();
  };

  return (
    <form onSubmit={handleSubmit(sendMessage)}>
      <input
        className="rounded-sm p-3 w-full border-t-2 border-gray-600 outline-none"
        type="text"
        placeholder={`Message ${currentChannel.name}}`}
        {...register('content')}
      />
    </form>
  );
};

export default MessageInput;
