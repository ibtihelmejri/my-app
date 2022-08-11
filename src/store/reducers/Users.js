import { GET_USERS } from "../actionTypes";

const initialState = {
  users: [],
};

const Users = (state = initialState, action) => {
  if (action.type === GET_USERS) {
    return Object.assign({}, state, {
      users: action.payload.data,
    });
  }

  return state;
};
export default Users;
