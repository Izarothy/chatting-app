import type { NextApiRequest, NextApiResponse } from 'next';
import { ChannelT } from 'types/Types';
import channels from 'data/channels.json';
type Data = {
  channels: ChannelT[] | string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (!channels.length) return res.status(404);
  res.status(200).json({ channels });
}
