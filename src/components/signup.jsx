import React, { useState } from 'react'

import CustomButton from './shared/custom-button'
import FormInput from './shared/form-input'
import { auth, createUserProfileDocument } from '../services/firebase'

function Signup() {
	const [signupData, setSignupData] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: ''
	})

	const handleChange = ({ target: { name, value } }) => {
		setSignupData({ ...signupData, [name]: value })
	}

	const { displayName, email, password, confirmPassword } = signupData;

	const handleSubmit = async (e) => {
		e.preventDefault();
		
		if (password !== confirmPassword) {
			alert('password don\'t match')
			return
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password)
			
			await createUserProfileDocument(user, { displayName })

			setSignupData({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			});
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className='sign-up'>
			<h2 className='title'>I do not have a account</h2>
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
		</div>
	)
}

export default Signup
