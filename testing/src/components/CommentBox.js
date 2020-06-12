import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from 'actions';

class CommentBox extends Component {
    state = { comment: ''};

    commentHandler = (event) => {
        this.setState({ comment: event.target.value })
    };

    formSubmitHandler = (event) => {
        event.preventDefault();

        this.props.commentDipatch(this.state.comment)
        // this.props.getComment(this.state.comment);
        this.setState({comment: ''});
        
    }

    render() {

        return (
            <div>
                <form 
                    onSubmit={this.formSubmitHandler}
                >
                    <h4>Add a comment </h4>
                    <textarea 
                        value={this.state.comment}
                        onChange={this.commentHandler}
                    />
                    <div>
                        <button type="submit">Submit comment</button>
                    </div>
                </form>
            </div>
        );
    };

}



const mapDispatchToProps = (dispatch) => {
    
    return { commentDipatch: (comment) =>  dispatch(actions.addComment(comment)) }; 
};

// export default CommentBox;
export default connect(null, mapDispatchToProps)(CommentBox);