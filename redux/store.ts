import { configureStore } from '@reduxjs/toolkit';
import channelsSlice from 'lib/channelsSlice';
import currentMemberSlice from 'lib/currentMemberSlice';
import membersSlice from 'lib/membersSlice';
import socketSlice from 'lib/socketSlice';
import currentChannelSlice from '../lib/currentChannelSlice';
import messagesSlice from '../lib/messagesSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      currentChannel: currentChannelSlice,
      messages: messagesSlice,
      channels: channelsSlice,
      members: membersSlice,
      currentMember: currentMemberSlice,
      socket: socketSlice,
    },
  });
}

export const store = makeStore();

export type AppDispatch = typeof store.dispatch;

export type AppState = ReturnType<typeof store.getState>;
