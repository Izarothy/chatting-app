import Image from 'next/image';
import React, { useState } from 'react';

type Props = {
  image: string;
  name: string;
};

const SideBarIcon: React.FC<Props> = ({ image, name }) => {
  const [serverIconHovered, setServerIconHovered] = useState(false);
  return (
    <>
      <div className="grid place-items-center cursor-pointer">
        <div
          onMouseEnter={() => setServerIconHovered(true)}
          onMouseLeave={() => setServerIconHovered(false)}
        >
          <Image
            layout="fixed"
            className="rounded-full"
            width={40}
            height={40}
            src={image || '/'}
          />
        </div>
        <span
          className={`${
            serverIconHovered ? `absolute` : `hidden`
          } bg-gray-800 text-black font-semibold ml-48 px-4 py-2 rounded-lg`}
        >
          {name}
        </span>
      </div>
    </>
  );
};

export default SideBarIcon;
