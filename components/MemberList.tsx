import React from 'react';
import { MemberT } from '../types/Types';
import Member from './Member';

type Props = {
  members: MemberT[];
};

const MemberList: React.FC<Props> = ({ members }) => {
  return (
    <aside className="bg-purple-800 pl-5 pr-6 py-10 flex flex-col gap-3 w-1/6 overflow-y-scroll">
      {members.map((member: MemberT) => {
        return <Member member={member} />;
      })}
    </aside>
  );
};

export default MemberList;
