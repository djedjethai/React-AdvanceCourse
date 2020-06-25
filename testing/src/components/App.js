import React, { Component }from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import CommentList from 'components/CommentList';
import CommentBox from 'components/CommentBox';
// import * as actions from 'actions';

class App extends Component {

    render() {
        return (
            <div>
		    {console.log(this.props.auth)}
		    < Route path="/post" component={CommentBox} />
		    < Route path="/" exact component={CommentList} />
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
	    auth: state.auth
}}


export default connect(mapStateToProps, null)(App);
