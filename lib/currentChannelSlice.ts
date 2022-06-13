import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../redux/store';

export const currentChannelSlice = createSlice({
  name: 'currentChannel',
  initialState: {
    value: 'general',
  },
  reducers: {
    changeCurrentChannel: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { changeCurrentChannel } = currentChannelSlice.actions;

export const currentChannel = (state: AppState) => state.currentChannel.value;

export default currentChannelSlice.reducer;
