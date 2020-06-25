import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AUTH_HANDLER } from '../actions/types';

class CommentList extends Component {

    renderComment = () => {
        return this.props.comments.map((comment) => {
            return <li key={comment}>{comment}</li>
        })
    }

    render() {
        return(
            <div>
		<button onClick={this.props.auth}>Login</button> 
		<h4>Comment List</h4>
                <ul>
                    {this.renderComment()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {comments: state.comments}
}

const mapDispatchToProps = (dispatch) => {
	return { 
		auth: () => dispatch({type: AUTH_HANDLER})
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);

// export default (props) => {
//     console.log('AFFICH_COMMENTS');
//     console.log(props.comments);
//     return <div>I am commentList</div>
// }
