import { addComment } from 'actions';
import { ADD_COMMENT } from 'actions/types';

describe('addComment', () => {

    test('the correct type', () => {
        let returnComment = addComment();
        expect(returnComment.type).toEqual(ADD_COMMENT);
    });

    test('the correct payload', () => {
        let returnComment = addComment('My comment');
        expect(returnComment.payload).toEqual('My comment');
    })
})