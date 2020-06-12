import React, { Component }from 'react';
// import { connect } from 'react-redux';

import CommentList from 'components/CommentList';
import CommentBox from 'components/CommentBox';
// import * as actions from 'actions';

class App extends Component {

    state = {
        comments: []
    };

    render() {
        return (
            <div>
                <CommentBox getComment={comment => this.setState({comments: [comment]})} />
                <CommentList comments={this.state.comments} />
            </div>
        );
    };
}

// const mapStateToProps = (state) => {
//    return state    
// };

// const mapDispatchToProps = (dispatch) => {
    
//     return { commentHandler: (comment) =>  dispatch(actions.addComment(comment)) }; 
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;