import { combineReducers } from 'redux';
// here we just give an alias to reducer as we are still in reducer... could make some confusion
import { reducer as formReducer } from 'redux-form'; 
import auth from './auth';

export default combineReducers({
	auth: auth,
	form: formReducer
});


