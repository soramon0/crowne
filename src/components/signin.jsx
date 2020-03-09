import React, { useState } from 'react'

import CustomButton from './shared/custom-button'
import FormInput from './shared/form-input'

function Signin() {
	const [signinData, setSigninData] = useState({ email: '', password: '' })

	const handleChange = ({ target: { name, value } }) => {
		setSigninData({ ...signinData, [name]: value })
	}

	const handleSubmit = (e) => {
		e.preventDefault();

    setSigninData({ email: '', password: '' });
	}

	return (
		<div class="sign-in">
			<h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={handleChange}
            value={signinData.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={signinData.password}
            handleChange={handleChange}
            label='password'
            required
          />
          <CustomButton type='submit'> Sign in </CustomButton>
        </form>
		</div>
	)
}

export default Signin
