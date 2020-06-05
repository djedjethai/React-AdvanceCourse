import { combineReducers } from 'redux';
import commentsReducers from '/reducers/commentRd';

export default combineReducers({
    comments: commentsReducers
})
