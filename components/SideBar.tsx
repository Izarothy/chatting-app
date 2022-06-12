import Image from 'next/image';
import React, { useState } from 'react';
import { ChatRoom } from '../types/Types';
import SideBarIcon from './SideBarIcon';

type Props = {
  chatRooms: ChatRoom[];
};

const SideBar: React.FC<Props> = ({ chatRooms }) => {
  return (
    <aside className="flex flex-col gap-4 px-2 py-8 overflow-y-scroll bg-purple-800 h-screen max-h-screen w-24 align-center">
      {chatRooms.map((chatroom: ChatRoom) => (
        <SideBarIcon
          name={chatroom.name}
          image={chatroom.image || '/default'}
        />
      ))}
    </aside>
  );
};

export default SideBar;
