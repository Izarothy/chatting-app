import Image from 'next/image';
import React, { useState } from 'react';
import { ChatRoomT } from '../types/Types';
import SideBarIcon from './SideBarIcon';

type Props = {
  chatRooms: ChatRoomT[];
};

const SideBar: React.FC<Props> = ({ chatRooms }) => {
  return (
    <aside className="flex flex-col gap-4 px-2 py-8 overflow-y-scroll bg-purple-800 h-screen w-24 align-center scrollbar-hide">
      {chatRooms.map((chatroom: ChatRoomT) => (
        <SideBarIcon
          key={chatroom.id}
          name={chatroom.name}
          image={chatroom.image || '/default'}
        />
      ))}
    </aside>
  );
};

export default SideBar;
