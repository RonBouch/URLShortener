import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface URLState {
  urls: [],
}

const initialState: URLState = {
  urls: [],
}

export const urlSlice = createSlice({
  name: 'urlStore',
  initialState,
  reducers: {
    setUrls: (state: any, action: PayloadAction<any[]>) => {
      state.urls = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUrls } = urlSlice.actions

export default urlSlice.reducer