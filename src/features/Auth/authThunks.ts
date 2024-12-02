import { createAsyncThunk } from '@reduxjs/toolkit';
import { refreshToken } from '../../services/authApi';

export const refreshTokenRequest = createAsyncThunk(
  'auth/refreshToken',
  async (payload: { token: string }, { rejectWithValue }) => {
    try {
      const response = await refreshToken(payload.token);
      return response; // Возвращаем обновлённые токены
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Unable to refresh token');
    }
  }
);
