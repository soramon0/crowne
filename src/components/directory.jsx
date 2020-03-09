import React, { useState } from 'react'

import '../styles/directory.scss'
import MenuItem from './menu-item'
import SECTION_DATA from '../constants/sectionData'

function Directory() {
	const [sections] = useState(SECTION_DATA)

	return (
		<div className='directory-menu'>
			{sections.map(({ id, ...otherProps}) => <MenuItem {...otherProps} key={id} />)}
		</div>
	)
}

export default Directory
