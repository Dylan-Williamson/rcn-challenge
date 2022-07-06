import { combineReducers } from 'redux';
import usersReducer from './Users/reducer';

export const reducer = combineReducers({
  users: usersReducer
})
