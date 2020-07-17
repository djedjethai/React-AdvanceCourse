import { AUTH_USER, AUTH_ERR } from './types';
import axios from 'axios'; 

// the callback as been activated in the Signup Component(c la redirection this.props.history.push)
export const signup = ({ email, password }, callback) => async dispatch => {
	try{
		const response = await axios.post('http://localhost:3090/signup', { email: email, password: password });
			
		dispatch({ type: AUTH_USER, payload: response.data.token });
		localStorage.setItem('token', response.data.token);
		callback();
	} catch(e) {
		dispatch({ type: AUTH_ERR, payload: "This account is already in use" })
	}

}

export const signin = ({ email, password }, callback) => async dispatch => {
	try{
		const response = await axios.post('http://localhost:3090/signin', { email, password });

		dispatch({ type: AUTH_USER, payload: response.data.token });
		localStorage.setItem('token', response.data.token);
		callback();
	} catch(e) {
		dispatch({ type: AUTH_ERR, payload: "Incorrect crudentials" });
	}
} 


export const signout = () => {
		localStorage.removeItem('token');

		return { 
			type: AUTH_USER, 
			payload: '' 
		};
};

