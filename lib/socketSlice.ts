import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Socket } from 'socket.io-client';
import { AppState } from '../redux/store';

interface SocketState {
  value: Socket | null;
}

const initialState: SocketState = { value: null };

export const socketSlice = createSlice({
  name: 'socket',
  initialState: initialState,
  reducers: {
    setSocket: (state, action: PayloadAction<Socket>) => {
      state.value = action.payload;
    },
  },
});

export const { setSocket } = socketSlice.actions;

export const Sockets = (state: AppState) => state.socket.value;

export default socketSlice.reducer;
