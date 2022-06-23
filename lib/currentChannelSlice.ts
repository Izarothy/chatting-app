import channels from 'data/channels.json';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../redux/store';
import { ChannelT } from '../types/Types';

export const currentChannelSlice = createSlice({
  name: 'currentChannel',
  initialState: {
    value: channels[0],
  },
  reducers: {
    setCurrentChannel: (state, action: PayloadAction<ChannelT>) => {
      localStorage.setItem('currentChannel', JSON.stringify(action.payload));
      const { name, id } = action.payload;
      state.value.name = name;
      state.value.id = id;
    },
  },
});

export const { setCurrentChannel } = currentChannelSlice.actions;

export const currentChannel = (state: AppState) => state.currentChannel.value;

export default currentChannelSlice.reducer;
