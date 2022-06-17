import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../redux/store';
import { MemberT } from '../types/Types';

interface CurrentMemberState {
  value: MemberT;
}

const initialState: CurrentMemberState = {
  value: {
    id: Math.random() * 9999999999,
    name: 'Guest',
  },
};
export const currentMemberSlice = createSlice({
  name: 'currentMember',
  initialState: initialState,
  reducers: {
    changeCurrentMember: (state, action: PayloadAction<MemberT>) => {},
  },
});

export const { changeCurrentMember } = currentMemberSlice.actions;

export const currentMember = (state: AppState) => state.currentMember.value;

export default currentMemberSlice.reducer;
