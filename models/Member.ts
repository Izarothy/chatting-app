import mongoose, { Schema } from 'mongoose';

const Member = mongoose.model(
  'Member',
  new Schema({
    name: String,
  })
);

export default Member;
