import React, { Component }from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
// import { authHandler } from 'actions/index';

import CommentList from 'components/CommentList';
import CommentBox from 'components/CommentBox';
import * as actions from 'actions';

class App extends Component {

	renderButton() {
		if (!this.props.auth.auth) {
			return <button onClick={this.props.authRd}>Login</button> 
		} else {
			return <button onClick={this.props.authRd}>Logout</button> 
		}
	}

	renderHeader() {
		return (
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/post">Post</Link>
				</li>
				<li>
					{this.renderButton()}
				</li>
			</ul>
		);
	}

    	render() {
        	return (
            	<div>
			{this.renderHeader()}
		    	< Route path="/post" component={CommentBox} />
		    	< Route path="/" exact component={CommentList} />
            	</div>
        	);
    	};
}

const mapStateToProps = (state) => {
    	return {
	    	auth: state
}}

const mapDispatchToProps = (dispatch) => {
	return { 
		authRd: () => dispatch(actions.authHandler())
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
