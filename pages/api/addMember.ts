import Member from 'models/Member';
import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import { MemberT } from 'types/Types';

type Data =
  | {
      memberAdded: MemberT | string;
    }
  | string;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (!process.env.DB_URL) return res.status(500);

  mongoose.connect(process.env.DB_URL);

  if (await Member.findOne({ name: req.body.name }))
    return res.status(400).send('User already exists');

  const memberToAdd = new Member({
    name: req.body.name,
  });

  const member = await memberToAdd.save();

  const memberAdded = {
    name: member.name,
    id: Number(member._id),
  };

  res.status(200).json({ memberAdded });
}
