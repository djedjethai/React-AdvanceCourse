import React, { Component } from 'react';

export default (ChildComponent) => {
	class ComposedComponent extends Component {
		render() {
			return <ChildComponent />;
		}
	}

	return ComposedComponent;
};


// image we are in CommentBox.js
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

