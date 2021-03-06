import React, { Fragment, useReducer } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

function loginReducer(state, action) {
	switch (action.type) {
		case 'field': {
			return {
				...state,
				[action.field]: action.value
			};
		}
		case 'login': {
			return {
				...state
			};
		}
		default:
			return state;
	}
}

const initialState = {
	email: '',
	password: ''
};

const Login = ({ login, isAuthenticated }) => {
	const [state, dispatch] = useReducer(loginReducer, initialState);

	const { email, password } = state;

	// const [formData, setFormData] = useState({
	// 	email: '',
	// 	password: ''
	// });

	// const { email, password } = formData;

	// const onChange = (e) =>
	// 	setFormData({ ...formData, [e.target.name]: e.target.value });

	const onChange = (e) =>
		dispatch({ type: 'field', field: [e.target.name], value: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		dispatch({ type: 'login' });
		login(email, password);
	};

	// Redirect If Logged In
	if (isAuthenticated) {
		return <Redirect to='/dashboard' />;
	}

	return (
		<Fragment>
			<h1 className='large text-primary'>Sign In</h1>
			<p className='lead'>
				<i className='fas fa-user'></i> Sign Into Your Account
			</p>
			<form className='form' onSubmit={(e) => onSubmit(e)}>
				<div className='form-group'>
					<input
						type='email'
						placeholder='Email Address'
						name='email'
						value={email}
						onChange={(e) => onChange(e)}
						required
					/>
				</div>
				<div className='form-group'>
					<input
						type='password'
						placeholder='Password'
						name='password'
						value={password}
						onChange={(e) => onChange(e)}
						minLength='6'
					/>
				</div>
				<input type='submit' className='btn btn-primary' value='Login' />
			</form>
			<p className='my-1'>
				Do Not have an account? <Link to='/register'>Sign Up</Link>
			</p>
		</Fragment>
	);
};

Login.propTypes = {
	login: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool
};

// To Get The Auth State
const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
