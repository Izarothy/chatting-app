import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { useAppSelector } from '../lib/hooks';
import { changeCurrentChannel } from '../lib/currentChannelSlice';
type Props = {
  name: string;
};

const Channel: React.FC<Props> = ({ name }) => {
  const currentChannel = useAppSelector((state) => state.currentChannel.value);
  const dispatch: AppDispatch = useDispatch();

  return (
    <a
      className="text-white text-lg cursor-pointer"
      onClick={() => dispatch(changeCurrentChannel(name))}
    >
      <strong className="font-bold mr-4">•</strong>
      {name}
      {currentChannel}
    </a>
  );
};

export default Channel;
