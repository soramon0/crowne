import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import CustomButton from '../shared/custom-button'
import FormInput from '../shared/form-input'
import { SignUpContainer, SignUpTitle } from './register.styles';
import { signUpStart } from '../../store/user/actions';

function Signup() {
	const dispatch = useDispatch()
	const [userCreds, setUserCreds] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: ''
	})

	const handleChange = ({ target: { name, value } }) => {
		setUserCreds({ ...userCreds, [name]: value })
	}

	const { displayName, email, password, confirmPassword } = userCreds;

	const handleSubmit = async (e) => {
		e.preventDefault();
		
		if (password !== confirmPassword) {
			alert('password don\'t match')
			return
		}

		dispatch(signUpStart(userCreds))
	}

	return (
		<SignUpContainer>
			<SignUpTitle>I do not have a account</SignUpTitle>
			<span>Sign up with your email and password</span>
			<form className='sign-up-form' onSubmit={handleSubmit}>
				<FormInput
					type='text'
					name='displayName'
					value={displayName}
					onChange={handleChange}
					label='Display Name'
					required
				/>
				<FormInput
					type='email'
					name='email'
					value={email}
					onChange={handleChange}
					label='Email'
					required
				/>
				<FormInput
					type='password'
					name='password'
					value={password}
					onChange={handleChange}
					label='Password'
					required
				/>
				<FormInput
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					onChange={handleChange}
					label='Confirm Password'
					required
				/>
				<CustomButton type='submit'>SIGN UP</CustomButton>
			</form>
		</SignUpContainer>
	)
}

export default Signup
