import React from 'react'
import { useSelector } from 'react-redux'

import { selectCollectionsForPreview } from '../../store/shop/selectors'
import CollectionPreview from './collection-preview'
import { CollectionsOverviewContainer } from './shop.styles';

function CollectionsOverview() {
	const collections = useSelector(selectCollectionsForPreview)

	return (
		<CollectionsOverviewContainer>
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</CollectionsOverviewContainer>
	)
}

export default CollectionsOverview
