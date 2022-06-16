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
  id: number;
  content: string;
  channelID: number;
};

export type MemberT = {
  id: number;
  name: string;
  avatar?: string;
};
