//export default function({ dispatch }) {
//	return function(next) {
//		return function(action) {
//			
//		}
//	}
//}

export default ({ dispatch }) => next => action => {

	// if there is no payload so no promise, we go straight to the next middleware 
	if (!action.payload || !action.payload.then) {
		return next(action);
	}

	// as we pass the first condition, we know that we have to deal with a promise
	// dispatch() declenche le passage throught the middleware, or/and restart this path
	action.payload.then(function(response) {
		const newAction = { ...action, payload: response };
		dispatch(newAction);

	})
}
	

