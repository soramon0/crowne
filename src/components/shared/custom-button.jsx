import React from 'react'

import '../../styles/custom-buttom.scss';

function CustomButton({ children, isGoogleSignIn, ...otherProps }) {
	console.log(isGoogleSignIn);
	
	return (
		<button className={`${isGoogleSignIn ? 'google-signin' : ''} custom-button` } {...otherProps}>
			{children}
		</button>
	);
}

export default CustomButton
