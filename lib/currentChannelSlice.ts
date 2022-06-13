import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../redux/store';
import { ChannelT } from '../types/Types';

export const currentChannelSlice = createSlice({
  name: 'currentChannel',
  initialState: {
    value: {
      id: 0,
      name: 'general',
    },
  },
  reducers: {
    changeCurrentChannel: (state, action: PayloadAction<ChannelT>) => {
      const { name, id } = action.payload;
      state.value.name = name;
      state.value.id = id;
    },
  },
});

export const { changeCurrentChannel } = currentChannelSlice.actions;

export const currentChannel = (state: AppState) => state.currentChannel.value;

export default currentChannelSlice.reducer;
