import React from 'react'

import SignIn from './signin'
import Signup from './signup'
import { SignInAndSignUpContainer } from './register.styles'

function SigninSignup() {
	return (
		<SignInAndSignUpContainer>
			<SignIn />
			<Signup />
		</SignInAndSignUpContainer>
	)
}

export default SigninSignup
