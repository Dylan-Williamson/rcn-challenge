const initialState = {
  users: [],
  filteredUsers: [],
  user: {},
  userSort: {
    column: 'firstName',
    direction: 'asc'
  }
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload };
    case "SET_FILTERED_USERS":
      return { ...state, filteredUsers: action.payload };
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_USER_SORT":
      return { ...state, userSort: action.payload };
    case "RESET_USERS":
      return { ...state, users: [] };
    default:
      return { ...state };
  }
};

export default usersReducer;
