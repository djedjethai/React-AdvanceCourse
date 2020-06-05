import React, { Component }from 'react';
import { connect } from 'react-redux';

import CommentList from 'components/CommentList';
import CommentBox from 'components/CommentBox';

class App extends Component {

    // state = {
    //     comments: []
    // }
    

    render() {
        return (
            <div>
                <CommentBox  getComment={this.props.commentHandler.bind(this, comment)}/>
                <CommentList comments={this.props.comments} />
            </div>
        );
    };
}

const mapStateToProps = (state) => {
   return { comments: state.comments }   
};

const mapDispatchToProps = (dispatch) => {
    return { commentHandler: (comment) => dispatch({type: 'ADD_COMMENT', comment: comment}) }; 
};

export default connect(mapStateToProps, mapDispatchToProps)(App);