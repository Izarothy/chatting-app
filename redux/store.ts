import { configureStore } from '@reduxjs/toolkit';
import currentChannelSlice from '../lib/currentChannelSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      currentChannel: currentChannelSlice,
    },
  });
}

export const store = makeStore();
export type AppDispatch = typeof store.dispatch;
