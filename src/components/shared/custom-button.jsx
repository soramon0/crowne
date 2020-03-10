import React from 'react'

import '../../styles/custom-buttom.scss';

function CustomButton({ children, isGoogleSignIn, inverted, ...otherProps }) {
	const classes = ['custom-button']

	if (isGoogleSignIn) {
		classes.push('google-signin')
	}

	if (inverted) {
		classes.push('inverted')
	}

	return (
		<button className={classes.join(' ')} {...otherProps}>
			{children}
		</button>
	);
}

export default CustomButton
