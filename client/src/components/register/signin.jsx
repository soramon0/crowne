import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { googleSignInStart, emailSignInStart } from '../../store/user/actions'
import CustomButton from '../shared/custom-button'
import FormInput from '../shared/form-input'

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './register.styles';

function Signin() {
  const dispatch = useDispatch()
	const [userCreds, setUserCreds] = useState({ email: '', password: '' })

	const handleChange = ({ target: { name, value } }) => {
		setUserCreds({ ...userCreds, [name]: value })
	}

	const dispatchEmailSignIn = async (e) => {
    e.preventDefault();
    dispatch(emailSignInStart(userCreds))
  }
  
  const dispatchGoogleSignIn = () => {
    dispatch(googleSignInStart())
  }

	return (
		<SignInContainer>
			<SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={dispatchEmailSignIn}>
          <FormInput
            name='email'
            type='email'
            handleChange={handleChange}
            value={userCreds.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={userCreds.password}
            handleChange={handleChange}
            label='password'
            required
          />
          <ButtonsBarContainer>
            <CustomButton type='submit'>Sign in</CustomButton>
            <CustomButton type='button' onClick={dispatchGoogleSignIn} isGoogleSignIn>Sign in With Google</CustomButton>
          </ButtonsBarContainer>
        </form>
		</SignInContainer>
	)
}

export default Signin
