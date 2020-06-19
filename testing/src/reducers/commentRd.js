import { ADD_COMMENT, FETCH_COMMENTS } from 'actions/types';

// const initialState = [];

// const pushComment = (state, action) => {
//     return [...state, action.payload]
// };

const filterComments = (state, action) => {
    console.log(action.payload.data);
    const newDatas = [];
    action.payload.data.map(comment => {
        newDatas.push(comment.name)
    })
    return [...state, ...newDatas];
    // solution du prof
    // const newComment = action.payload.data.map(comment => comment.name);
    // return [...state, ...newComment];
    
}


export default function(state = [], action) {
    
    switch (action.type) {
        case ADD_COMMENT:
            // return pushComment(state, action);
            return [...state, action.payload];
        case FETCH_COMMENTS:
            return filterComments(state, action);
        default:
            return state;
    }
}
