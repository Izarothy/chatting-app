import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../redux/store';
import { MemberT } from '../types/Types';

interface CurrentMemberState {
  value: MemberT | null;
}

const initialState: CurrentMemberState = {
  value: null,
};
export const currentMemberSlice = createSlice({
  name: 'currentMember',
  initialState: initialState,
  reducers: {
    changeCurrentMember: (state, action: PayloadAction<MemberT>) => {
      state.value = action.payload;
    },
  },
});

export const { changeCurrentMember } = currentMemberSlice.actions;

export const currentMember = (state: AppState) => state.currentMember.value;

export default currentMemberSlice.reducer;
