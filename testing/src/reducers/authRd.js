import { AUTH_HANDLER } from 'actions/types';

//const initialState = {
//	isAuth: false
//}

export default function(state = false, action) {
	
	switch (action.type) {
		case AUTH_HANDLER:
			return !state;
			//return {
			//	...state, isAuth: !state.isAuth 
			//};
		default:
			return state;

	}
}

