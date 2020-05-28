import React, { Component } from 'react';


class CommentBox extends Component {
    state = { comment: ''};

    commentHandler = (event) => {
        this.setState({ comment: event.target.value })
    };

    formSubmitHandler = (event) => {
        event.preventDefault();

        // TODO - call an action creator 
        // and save the comment
        
        this.setState({ comment: '' });
    }

    render() {

        return (
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
        );
    };

}
export default CommentBox;