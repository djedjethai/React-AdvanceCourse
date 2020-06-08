import { ADD_COMMENT } from 'components/actions/types';

export function addComment(comment) {
    return {
        type: ADD_COMMENT,
        payload: comment
    }
}