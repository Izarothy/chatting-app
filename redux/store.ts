import { configureStore } from '@reduxjs/toolkit';
import currentChannelSlice from '../lib/currentChannelSlice';
import messagesSlice from '../lib/messagesSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      currentChannel: currentChannelSlice,
      messages: messagesSlice,
    },
  });
}

export const store = makeStore();

export type AppDispatch = typeof store.dispatch;

export type AppState = ReturnType<typeof store.getState>;
