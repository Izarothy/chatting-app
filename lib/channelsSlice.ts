import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../redux/store';
import { ChannelT } from '../types/Types';

interface ChannelsState {
  value: ChannelT[];
}

const initialState: ChannelsState = { value: [] };

export const channelsSlice = createSlice({
  name: 'channels',
  initialState: initialState,
  reducers: {
    setChannels: (state, action: PayloadAction<ChannelT[]>) => {
      state.value = action.payload;
    },
  },
});

export const { setChannels } = channelsSlice.actions;

export const messages = (state: AppState) => state.messages.value;

export default channelsSlice.reducer;
