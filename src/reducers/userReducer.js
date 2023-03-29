import { createSlice } from "@reduxjs/toolkit";
import userService from "../services/users";

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    createNewUser(state, action) {
      state.push(action.payload);
    },
    deleteUser(state, action) {
      const id = action.payload;
      const users = state;
      const index = users.map((u) => u.id).indexOf(id);
      //console.log(index, "deleteUser", id);
      if (index === -1) {
        console.log(index, "error, index not found");
      }
      return [...users.slice(0, index), ...users.slice(index + 1)];
    },
    setUsers(state, action) {
      return action.payload;
    }
  }
});

export const { createNewUser, deleteUser, setUsers } = userSlice.actions;

export const initializeUsers = () => {
  //console.log("initializeUsers");
  return async (dispatch) => {
    const users = await userService.getAll();
    dispatch(setUsers(users));
  };
};

export default userSlice.reducer;
