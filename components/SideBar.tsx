import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { ChatRoom } from '../types/Types';

type Props = {
  chatRooms: ChatRoom[];
};

const SideBar: React.FC<Props> = ({ chatRooms }) => {
  const [serverIconHovered, setServerIconHovered] = useState(false);

  useEffect(() => {
    console.log(serverIconHovered);
  }, [serverIconHovered]);
  return (
    <aside className="flex flex-col gap-4 px-2 py-8 overflow-y-scroll bg-purple-400 h-screen max-h-screen w-24 align-center">
      {chatRooms.map((chatroom: ChatRoom) => {
        return (
          <>
            <div
              className="grid place-items-center cursor-pointer"
              onMouseOver={() => setServerIconHovered(!serverIconHovered)}
            >
              <Image
                layout="fixed"
                className="rounded-full"
                width={40}
                height={40}
                src={chatroom.image || '/'}
              />
              <span
                className={`${
                  serverIconHovered ? `absolute` : `hidden`
                } bg-gray-800 text-black font-semibold ml-48 px-4 py-2 rounded-lg`}
              >
                {chatroom.name}
              </span>
            </div>
          </>
        );
      })}
    </aside>
  );
};

export default SideBar;
