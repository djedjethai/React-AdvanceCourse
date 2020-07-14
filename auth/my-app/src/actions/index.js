import { AUTH_USER, AUTH_ERR } from './types';
import axios from 'axios'; 

export const signup = ({ email, password }) => async dispatch => {
	try{
		const response = await axios.post('http://localhost:3090/signup', { email: email, password: password });

		dispatch({ type: AUTH_USER, payload: response.data.token });
	} catch(e) {
		dispatch({ type: AUTH_ERR, payload: "This account is already in use" })
	}

}

