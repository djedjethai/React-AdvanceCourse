const initialState = {
    comments: []
}

const addComment = (action) => {

    return [action.comment]; 
};


export default function(state = initialState, action) {
    
    switch (action.type) {
        case 'ADD_COMMENT':
            return { ...state, comments: state.comments.concat(addComment(action)) }
        default:
            return state;
    }
}