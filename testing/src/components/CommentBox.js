import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from 'actions';

class CommentBox extends Component {
	state = { comment: ''};
	
	componentDidMount() {
		this.shouldNavigateAway();	
	};

	componentDidUpdate() {
		this.shouldNavigateAway();
	};

	shouldNavigateAway() {
		if (!this.props.auth.auth) {
			this.props.history.push('/');
		}
	}

	commentHandler = (event) => {
	this.setState({ comment: event.target.value })
	};

	formSubmitHandler = (event) => {
	event.preventDefault();

	this.props.commentDipatch(this.state.comment)
	// this.props.getComment(this.state.comment);
	this.setState({comment: ''});  
	}

	// buttonSubmit = (event) => {
	//     this
	// }

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
                <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch the comments</button>
            </div>
        );
    };

}


const mapStateToProps = (state) => {
	return {
		auth: state
	}
};


const mapDispatchToProps = (dispatch) => {
    
    return { 
        commentDipatch: (comment) =>  dispatch(actions.addComment(comment)),
        fetchComments: () => dispatch(actions.fetchComments()) 
    }; 
};

// export default CommentBox;
export default connect(mapStateToProps, mapDispatchToProps)(CommentBox);
