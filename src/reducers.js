import {
  CHANGE_SEARCH_FIELD,
  REQUEST_FRIENDS_PENDING,
  REQUEST_FRIENDS_SUCCESS,
  REQUEST_FRIENDS_FAILED,
} from "./constants";

const initialStateSearch = {
  searchField: "",
};

export const searchFriends = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return {
        ...state,
        searchField: action.payload,
      };
    default:
      return state;
  }
};

const initialStateFriends = {
  isPending: false,
  friends: [],
  error: "",
};

export const requestFriends = (state = initialStateFriends, action = {}) => {
  switch (action.type) {
    case REQUEST_FRIENDS_PENDING:
      return {
        ...state,
        isPending: true,
      };
    case REQUEST_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        isPending: false,
      };
    case REQUEST_FRIENDS_FAILED:
      return {
        ...state,
        error: action.payload,
        isPending: false,
      };
    default:
      return state;
  }
};
