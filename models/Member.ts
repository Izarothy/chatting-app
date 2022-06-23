import mongoose, { Schema } from 'mongoose';

const memberSchema = new Schema({ name: String, password: String });

export const Member =
  mongoose.models.Member || mongoose.model('Member', memberSchema);
