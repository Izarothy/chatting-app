import React from 'react';

type Props = {
  name: string;
};

const Channel: React.FC<Props> = ({ name }) => {
  return (
    <a className="text-white text-lg cursor-pointer">
      <strong className="font-bold mr-4">•</strong>
      {name}
    </a>
  );
};

export default Channel;
