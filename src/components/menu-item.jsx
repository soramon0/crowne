import React from 'react'

import '../styles/menu-item.scss'

function MenuItem({ title, imageUrl, size }) {
	return (
		<div className={`${size} menu-item`}>
			<div style={{ backgroundImage: `url(${imageUrl})` }} className='background-image'></div>
			<div className='content'>
				<div className='title'>{title.toUpperCase()}</div>
				<span className='subtitle'>SHOP NOW</span>
			</div>
		</div>
	)
}

export default MenuItem
