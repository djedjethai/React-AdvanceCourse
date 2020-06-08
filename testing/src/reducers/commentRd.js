import { ADD_COMMENT } from 'components/actions/types';

const initialState = {
    comments: []
}

const pushComment = (state, action) => {
    return { ...state, comments: state.comments.concat([action.payload]) }
};


export default function(state = initialState, action) {
    
    switch (action.type) {
        case ADD_COMMENT:
            return pushComment(state, action);
        default:
            return state;
    }
}