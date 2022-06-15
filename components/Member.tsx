import Image from 'next/image';
import React from 'react';
import { MemberT } from '../types/Types';

type Props = {
  member: MemberT;
};

const Member: React.FC<Props> = ({ member }) => {
  return (
    <div className="font-bold text-lg text-white flex gap-4 items-center">
      <Image
        layout="fixed"
        width={48}
        height={48}
        src={member.avatar || '/user-placeholder.jpg'}
        className="rounded-full"
      />
      {member.name}
    </div>
  );
};

export default Member;
