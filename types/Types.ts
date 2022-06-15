export type ChatRoomT = {
  id: number;
  name: string;
  image?: string;
};

export type ChannelT = {
  id: number;
  name: string;
  isText: boolean;
};

export type MessageT = {
  id: string;
  content: string;
};

export type MemberT = {
  id: string;
  name: string;
  avatar?: string;
};
