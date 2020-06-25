import { AUTH_HANDLER } from 'actions/types';

const initialState = {
	isAuth: false
}

export default function(state = initialState, action) {
	
	switch (action.type) {
		case AUTH_HANDLER:
			return {
				...state, isAuth: true
			};
		default:
			return state;

	}
}

