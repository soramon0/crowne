import React from 'react'
import { useSelector } from 'react-redux'

import '../styles/directory.scss'
import MenuItem from './menu-item'
import { selectSections } from '../store/directory/selectors'

function Directory() {
	const sections = useSelector(selectSections)

	return (
		<div className='directory-menu'>
			{sections.map(({ id, ...otherProps}) => <MenuItem {...otherProps} key={id} />)}
		</div>
	)
}

export default Directory
