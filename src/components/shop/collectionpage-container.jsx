import React from 'react'
import { useSelector } from 'react-redux'

import CollectionPage from './collection-page'
import WithSpinner from '../shared/with-spinner'
import { selectIsCollectionsLoaded } from '../../store/shop/selectors'

const CollectionPageWithSpinner = WithSpinner(CollectionPage)

function CollectionpageContainer(props) {
	const isLoading = useSelector(selectIsCollectionsLoaded)
	return <CollectionPageWithSpinner isLoading={!isLoading} {...props} />
}

export default CollectionpageContainer
