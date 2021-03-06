import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';


class Signup extends Component {
	// formProps est issue du, transmit to onSubmit via the method handleSubmit()
	// this.props.signup comes from the action, wich is link here via the connect()
	onSubmit = (formProps) => {
		// la callBack doit egualement etre stipule dans l'action creator
		this.props.signup(formProps, () => {
			this.props.history.push('/feature');
		});
	}

	
	render() {
		
		// this is provided to us from reduxForm
		const { handleSubmit } = this.props;
		

		return (
			// handleSubmit send the form data to onSubmit function
			<form onSubmit={handleSubmit(this.onSubmit)}>
				<fieldset>
					<label>Email:</label>
					<Field
						name="email"
						type="text"
						component="input"
						autoComplete="none"
					/>
				</fieldset>
				<fieldset>
					<label>Password:</label>
					<Field
						name="password"
						type="password"
						component="input"
						autoComplete="none"
					/>

				</fieldset>
				<div style={{ color: "red" }}>{this.props.errorMessage}</div>
				<button>Sign up!</button>
			</form>
		);
	};
};
  
const mapStateToProps = (state) => {
	return  {
		errorMessage: state.auth.errorMessage
	}
};

export default compose(
	connect(mapStateToProps, actions),
	reduxForm({ form: 'signup' })
)(Signup);


