import {
  CHANGE_SEARCH_FIELD,
  REQUEST_FRIENDS_PENDING,
  REQUEST_FRIENDS_SUCCESS,
  REQUEST_FRIENDS_FAILED,
} from "./constants";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

// Thunk action to make async fetch call to api
export const requestFriends = (dispatch) => {
  dispatch({ type: REQUEST_FRIENDS_PENDING });
  fetch(
    `https://randomuser.me/api/?results=20&nat=us,gb,fr,de&inc=name,email,picture`
  )
    .then((resp) => resp.json())
    .then((data) =>
      dispatch({ type: REQUEST_FRIENDS_SUCCESS, payload: data.results })
    )
    .catch((error) =>
      dispatch({ type: REQUEST_FRIENDS_FAILED, payload: error })
    );
};
