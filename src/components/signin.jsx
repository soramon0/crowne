import React, { useState } from 'react'

import { signInWithGoogle,  auth } from '../services/firebase'
import CustomButton from './shared/custom-button'
import FormInput from './shared/form-input'

function Signin() {
	const [signinData, setSigninData] = useState({ email: '', password: '' })

	const handleChange = ({ target: { name, value } }) => {
		setSigninData({ ...signinData, [name]: value })
	}

	const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(signinData.email, signinData.password)
      setSigninData({ email: '', password: '' });
    } catch (error) {
      console.log(error)
    }
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
          <div className="buttons">
            <CustomButton type='submit'>Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in With Google</CustomButton>
          </div>
        </form>
		</div>
	)
}

export default Signin
