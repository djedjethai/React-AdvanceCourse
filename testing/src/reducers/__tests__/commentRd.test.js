import commentRd from 'reducers/commentRd';
import { ADD_COMMENT } from 'actions/types';

test('handle actions of type ADD_COMMENT', () => {
    const action = {
        type: ADD_COMMENT,
        payload: 'New comment'
    }

    // first argument is the original state, and action the new one
    const newState = commentRd([], action);

    expect(newState).toEqual(['New comment']);
});

test('handle actions with unknow type', () => {
    const newState = commentRd([], {type: "IUYTIUYT"});
    expect(newState).toEqual([]); 
});