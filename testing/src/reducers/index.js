import { combineReducers } from 'redux';
import commentsReducers from 'reducers/commentRd';
import authReducers from 'reducers/authRd';

export default combineReducers({
    comments: commentsReducers,
	auth: authReducers
})
