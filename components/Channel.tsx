import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { useAppSelector } from '../lib/hooks';
import { setCurrentChannel } from '../lib/currentChannelSlice';
type Props = {
  id: string;
  name: string;
};

const Channel: React.FC<Props> = ({ id, name }) => {
  const currentChannel = useAppSelector((state) => state.currentChannel.value);
  const dispatch: AppDispatch = useDispatch();

  return (
    <a
      className={`${
        id == currentChannel.id ? `font-bold` : `font-normal`
      } text-white text-lg cursor-pointer`}
      onClick={() =>
        dispatch(setCurrentChannel({ id: id, name: name, isText: true }))
      }
    >
      <strong className="font-bold mr-4">•</strong>
      {name}
    </a>
  );
};

export default Channel;
