import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../redux/store';
import { MessageT } from '../types/Types';

interface MessageState {
  value: MessageT[];
}

const initialState: MessageState = { value: [] };

export const messagesSlice = createSlice({
  name: 'messages',
  initialState: initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<MessageT>) => {
      state.value.push(action.payload);
    },
  },
});

export const { addMessage } = messagesSlice.actions;

export const messages = (state: AppState) => state.messages.value;

export default messagesSlice.reducer;
