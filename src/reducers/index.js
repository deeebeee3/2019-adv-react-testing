import { combineReducers } from 'redux';
import commentsReducer from 'reducers/comment';

export default combineReducers({
  comments: commentsReducer
});