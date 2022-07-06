export const setUser = (user) => ({
  type: "SET_USER",
  payload: user
})

export const setUsers = (users) => ({
  type: "SET_FILTERED_USERS",
  payload: users
})

export const getUsers = () => {
  return dispatch => {
    fetch(`${process.env.REACT_APP_API}/?results=100`)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: "GET_USERS",
        payload: data.results
      })
      dispatch({
        type: "SET_FILTERED_USERS",
        payload: data.results
      })
    }
  )}
}

export const resetUsers = () => ({
  type: "RESET_USERS"
})