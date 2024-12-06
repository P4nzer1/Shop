import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileState {
  name: string;
  email: string;
  phone: string;
}

const initialState: ProfileState = {
  name: '',
  email: '',
  phone: '',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<ProfileState>) => {
      return action.payload;
    },
    updateProfile: (state, action: PayloadAction<Partial<ProfileState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setProfile, updateProfile } = profileSlice.actions;
export default profileSlice.reducer;
