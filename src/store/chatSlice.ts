import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChatState, Message } from '../types';

const initialState: ChatState = {
  messages: [],
  currentUser: 'User',
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
    setCurrentUser: (state, action: PayloadAction<string>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { addMessage, setCurrentUser } = chatSlice.actions;
export default chatSlice.reducer;