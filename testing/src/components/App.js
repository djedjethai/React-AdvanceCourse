import React, { Component }from 'react';
import { connect } from 'react-redux';

import CommentList from 'components/CommentList';
import CommentBox from 'components/CommentBox';
import { addComment } from 'components/actions/index';

class App extends Component {


    render() {
        return (
            <div>
                <CommentBox  getComment={comment => this.props.commentHandler(comment)}/>
                <CommentList comments={this.props.comments} />
            </div>
        );
    };
}

const mapStateToProps = (state) => {
   return { comments: state.comments }   
};

const mapDispatchToProps = (dispatch) => {
    
    return { commentHandler: (comment) =>  dispatch(addComment(comment)) }; 
};

export default connect(mapStateToProps, mapDispatchToProps)(App);