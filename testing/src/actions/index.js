import axios from 'axios';

import { ADD_COMMENT, FETCH_COMMENTS, AUTH_HANDLER } from 'actions/types';


export function addComment(comment) {
    return {
        type: ADD_COMMENT,
        payload: comment
    }
}

export function fetchComments() {
    const comments = axios.get('http://jsonplaceholder.typicode.com/comments');
    return {
        type: FETCH_COMMENTS,
        payload: comments
    }
}

export function authHandler() {
 	return {
 		type: AUTH_HANDLER,
 	}
};
