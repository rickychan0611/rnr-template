import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  userInfo: any
}

const initialState: UserState = {
  userInfo: {}
}

export const appSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state: UserState, action: PayloadAction<any>) => {
      state.userInfo = action.payload
    }
  }
})

export const {
  setUserInfo,
} = appSlice.actions

export default appSlice.reducer