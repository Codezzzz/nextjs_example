import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../interface/user";

const initialState: IUser = {
  isLoggedIn: false,
  user: null,
};
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUserRequest(state, action) {
      state.isLoggedIn = false;
    },
    getUserSuccess(state, action) {
      state.isLoggedIn = true;
    },
  },
});

const { reducer, actions } = usersSlice;

export const { getUserRequest, getUserSuccess } = actions;
export default reducer;
