import React from 'react'

import { CustomButtonContainer } from './shared.styles';

function CustomButton({ children, ...props }) {
	return (
		<CustomButtonContainer {...props}>{children}</CustomButtonContainer>
	);
}

export default CustomButton
