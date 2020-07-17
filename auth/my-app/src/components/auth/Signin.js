import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signin extends Component {
	
	// formProps est issue de reduxForm, transmit to onSubmit via the method handleSubmit()
	// this.props.signup comes from the action, wich is link here via the connect()
	onSubmit = (formProps) => {
		// la callBack doit egualement etre stipule dans l'action creator
		this.props.signin(formProps, () => {
			this.props.history.push('/feature');
		});
	}

	
	render() {
		
		// this is provided to us from reduxForm
		const { handleSubmit } = this.props;

	
		return (
			<form onSubmit={handleSubmit(this.onSubmit)}>
				<fieldset>
					<label>Email</label>
					<Field
						name="email"
						type="text"
						component="input"
						autoComplete="none"
					/>
				</fieldset>
				<fieldset>
					<label>Password</label>
					<Field
						name="password"
						type="password"
						autoComplete="none"
						component="input"
					/>
				</fieldset>
				<div style={{ color: "red" }}>{this.props.errorMessage}</div>
				<button>Sign in!</button>
			</form>
		);
	};
};

const mapStateToProps = (state) => {
	return {
		errorMessage: state.auth.errorMessage
	}
};

export default compose(
	connect(mapStateToProps, actions),
	reduxForm({ form: 'signin' })
)(Signin);


