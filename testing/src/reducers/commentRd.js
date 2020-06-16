import { ADD_COMMENT } from 'actions/types';

// const initialState = [];

// const pushComment = (state, action) => {
//     return [...state, action.payload]
// };


export default function(state = [], action) {
    
    switch (action.type) {
        case ADD_COMMENT:
            // return pushComment(state, action);
            return [...state, action.payload];
        default:
            return state;
    }
}
