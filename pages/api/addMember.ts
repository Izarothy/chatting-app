import { Member } from '../../models/Member';
import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import { MemberT } from 'types/Types';

type Data =
  | {
      memberAdded: MemberT;
    }
  | string;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (!process.env.DB_URL) return res.status(500).send('um');

  mongoose.connect(process.env.DB_URL);

  const foundMember = await Member.findOne({ name: req.body.memberName });
  if (foundMember) {
    if (
      req.body.password ===
      (await Member.findOne({ name: req.body.memberName })).name
    )
      return res
        .status(200)
        .json({ memberAdded: { id: foundMember._id, name: foundMember.name } });
    return res.status(400).send('Wrong password');
  }

  const memberToAdd = new Member({
    name: req.body.memberName,
    password: req.body.password,
  });

  const member = await memberToAdd.save();

  const memberAdded = {
    name: member.name,
    id: String(member._id),
  };

  res.status(200).json({ memberAdded });
}
