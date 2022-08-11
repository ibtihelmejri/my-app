import { GET_USERS, ADD_USER, SHOW_MESSAGE } from "../../Constants/ActionTypes";
import { crudApp } from "../../Services/crudApp";

export const getUsers = () => {
  return (dispatch) => {
    crudApp
      .get(`/users?page=1`)
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: GET_USERS, payload: response.data });
        }
      })
      .catch((error) => {
        console.log("erreur");
      });
  };
};

