import React from 'react'
import { withRouter } from 'react-router-dom'

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './home.styles';

function MenuItem({ title, imageUrl, size, linkUrl, history, match }) {

	const goToSection = () => {
		history.push(match.url + linkUrl)
	}
	
	return (
		<MenuItemContainer size={size} onClick={goToSection}>
			<BackgroundImageContainer imageUrl={imageUrl} className='background-image' />
			<ContentContainer>
				<ContentTitle>{title.toUpperCase()}</ContentTitle>
				<ContentSubtitle>SHOP NOW</ContentSubtitle>
			</ContentContainer>
		</MenuItemContainer>
	)
}

export default withRouter(MenuItem)
