import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import CollectionsOverview from './collections-overview'
import CollectionPage from './Collectionpage';
import { fetchCollectionsStartAsync } from '../../store/shop/actions';
import { selectIsCollectionsLoaded } from '../../store/shop/selectors';
import WithSpinner from '../shared/with-spinner'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

function ShopPage({ match }) {
	const dispatch = useDispatch()
	const isCollectionsLoaded = useSelector(selectIsCollectionsLoaded)

	useEffect(() => {
		dispatch(fetchCollectionsStartAsync())
	}, [dispatch])	

	return (
		<div className='shop-page'>
			<Route exact path={match.path} render={props => <CollectionsOverviewWithSpinner isLoading={!isCollectionsLoaded} {...props} />} />
			<Route path={`${match.path}/:collectionId`} render={props => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />} />
		</div>
	)
}

export default ShopPage
