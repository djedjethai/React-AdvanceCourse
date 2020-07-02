import React, { Component } from 'react';
import { connect } from 'react-redux'; 

export default (ChildComponent) => {
	class ComposedComponent extends Component {

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

	

		render() {
			return <ChildComponent {...this.props} />;
		}
	}

	const mapStateToProps = (state) => {
		return {
			auth: state
		}
	};

	return connect(mapStateToProps, null)(ComposedComponent);

};





// imagine we are in CommentBox.js
// import requireAuth from 'components/requireAuth';
//
// class CommentBox{
//
// }
//
// export default requireAuth(CommentBox);



// image we are in App.js
//import CommentBox from 'component/CommentBox';
//(revient a importer this ComposedComponent)
//(revient a importer le result de ComposedComponent)

