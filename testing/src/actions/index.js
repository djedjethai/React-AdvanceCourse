import { ADD_COMMENT } from 'actions/types';

export function addComment(comment) {
    return {
        type: ADD_COMMENT,
        payload: comment
    }
}