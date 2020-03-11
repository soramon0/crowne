import React from 'react'
import { useSelector } from 'react-redux'

import '../styles/collections-overview.scss'
import { selectCollectionsForPreview } from '../store/shop/selectors'
import CollectionPreview from './collection-preview'


function CollectionsOverview() {
	const collections = useSelector(selectCollectionsForPreview)
	console.log(collections);

	return (
		<div className='collections-overview'>
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	)
}

export default CollectionsOverview
