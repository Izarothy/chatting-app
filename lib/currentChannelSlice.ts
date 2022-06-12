import { createSlice } from '@reduxjs/toolkit';

export const currentChannelSlice = createSlice({
  name: 'currentChannel',
  initialState: {
    value: "general",
  },
  reducers: {
    changeCurrentChannel: (state, action) => {
      state.value = action.payload
    }
  },
});

export const { changeCurrentChannel } = currentChannelSlice.actions;

export default currentChannelSlice.reducer;
