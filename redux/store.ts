import { configureStore } from '@reduxjs/toolkit';
import channelsSlice from 'lib/channelsSlice';
import currentMemberSlice from 'lib/currentMemberSlice';
import currentChannelSlice from '../lib/currentChannelSlice';
import messagesSlice from '../lib/messagesSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      currentChannel: currentChannelSlice,
      messages: messagesSlice,
      channels: channelsSlice,
      currentMember: currentMemberSlice,
    },
  });
}

export const store = makeStore();

export type AppDispatch = typeof store.dispatch;

export type AppState = ReturnType<typeof store.getState>;
