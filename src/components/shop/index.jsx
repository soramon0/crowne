import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import CollectionsContainer from './collections-container'
import CollectionPageContainer from './collectionpage-container'
import { fetchCollectionsStart } from '../../store/shop/actions'

function ShopPage({ match }) {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchCollectionsStart())
	}, [dispatch])	

	return (
		<div className='shop-page'>
			<Route exact path={match.path} component={CollectionsContainer} />
			<Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
		</div>
	)
}

export default ShopPage
