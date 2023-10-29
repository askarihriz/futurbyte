import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface LoginData {
  name: string | undefined;
  password: string | undefined;
}

const initialState: LoginData = {
  name: undefined,
  password: undefined
}

export const LoginSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    SET_LOGIN_DATA: (state, action: PayloadAction<{name: string, password: string}>) => {
      state.name = action.payload.name;
      state.password = action.payload.password;
    },
  },
})

// Action creators are generated for each case reducer function
export const { SET_LOGIN_DATA } = LoginSlice.actions

export default LoginSlice.reducer