import React from 'react'
import '../styles/menu-item.scss'
import { withRouter } from 'react-router-dom'

function MenuItem({ title, imageUrl, size, linkUrl, history, match }) {

	const goToSection = () => {
		history.push(match.url + linkUrl)
	}
	
	return (
		<div className={size ? `${size} menu-item` : 'menu-item'} onClick={goToSection}>
			<div style={{ backgroundImage: `url(${imageUrl})` }} className='background-image'></div>
			<div className='content'>
				<div className='title'>{title.toUpperCase()}</div>
				<span className='subtitle'>SHOP NOW</span>
			</div>
		</div>
	)
}

export default withRouter(MenuItem)
