import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { compose } from 'redux'

import CollectionsOverview from './collections-overview'
import WithSpinner from '../shared/with-spinner'
import { selectIsCollectionsLoaded } from '../../store/shop/selectors'

const mapStateToProps = createStructuredSelector({
	isLoading: state => !selectIsCollectionsLoaded(state)
})

const CollectionContainer = compose(
	connect(mapStateToProps),
	WithSpinner,
)(CollectionsOverview)

export default CollectionContainer
