import React from 'react'

import '../styles/homepage.scss'
import Directory from '../components/directory'

function Homepage(props) {	
	return (
		<div className='homepage'>
			<h1>Welcome to my Homepage</h1>
			<Directory />
		</div>
	)
}

export default Homepage
