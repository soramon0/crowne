import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import CollectionsOverview from './collections-overview'
import CollectionPage from './Collectionpage';
import { firestore, covertCollectionSnapshotToMap } from '../../services/firebase';
import { updateCollections } from '../../store/shop/actions';
import WithSpinner from '../shared/with-spinner'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

function ShopPage({ match }) {
	const [loading, setLoading] = useState(true)
	const dispatch = useDispatch()

	useEffect(() => {
		const collectionRef = firestore.collection('collections')

		collectionRef.get()
			.then(snapshot => {			
				const collectionsMap = covertCollectionSnapshotToMap(snapshot)
				dispatch(updateCollections(collectionsMap));
				setLoading(false)
			})
	}, [dispatch])	

	return (
		<div className='shop-page'>
			<Route exact path={match.path} render={props => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
			<Route path={`${match.path}/:collectionId`} render={props => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
		</div>
	)
}

export default ShopPage
