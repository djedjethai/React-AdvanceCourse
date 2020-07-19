import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './HeaderStyle.css';

class Header extends Component {
	renderList() {
		if (!this.props.auth) {
			return (<div>
				<Link to="/signup">Sign up</Link>
				<Link to="/signin">Sign in</Link>
			</div>);
		} else {
			return (<div>
				<Link to="/signout">Sign out</Link>
				<Link to="/feature">Feature</Link>
			</div>);
		}		
	};

	render() {
		return(
			<div className="header">
				<Link to="/">Redux Auth</Link>
				{this.renderList()}				
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth.authenticated	
	}
};


export default connect(mapStateToProps, null)(Header);
