import React from 'react'
import { useSelector } from 'react-redux'

import MenuItem from './menu-item'
import { selectSections } from '../../store/directory/selectors'
import { DirectoryMenuContainer } from './home.styles'

function Directory() {
	const sections = useSelector(selectSections)

	return (
		<DirectoryMenuContainer>
			{sections.map(({ id, ...otherProps}) => <MenuItem {...otherProps} key={id} />)}
		</DirectoryMenuContainer>
	)
}

export default Directory
