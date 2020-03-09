import React from 'react'

import '../styles/signin-signup.scss'
import SignIn from '../components/signin'
import Signup from '../components/signup'

function SigninSignup() {
	return (
		<div className='signin-and-signup'>
			<SignIn />
			<Signup />
		</div>
	)
}

export default SigninSignup
