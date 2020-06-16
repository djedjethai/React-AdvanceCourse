import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {

    renderComment = () => {
        return this.props.comments.map((comment) => {
            return <li key={comment}>{comment}</li>
        })
    }

    render() {
        return(
            <div>
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

export default connect(mapStateToProps, null)(CommentList);

// export default (props) => {
//     console.log('AFFICH_COMMENTS');
//     console.log(props.comments);
//     return <div>I am commentList</div>
// }