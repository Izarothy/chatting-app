import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../redux/store';
import { MemberT } from '../types/Types';

interface MembersState {
  value: MemberT[];
}

const initialState: MembersState = { value: [] };

export const MembersSlice = createSlice({
  name: 'members',
  initialState: initialState,
  reducers: {
    setMembers: (state, action: PayloadAction<MemberT>) => {
      if (!state.value.some((member) => member.id === action.payload.id)) {
        state.value.push(action.payload);
      }
    },
  },
});

export const { setMembers } = MembersSlice.actions;

export const messages = (state: AppState) => state.messages.value;

export default MembersSlice.reducer;
