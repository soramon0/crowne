import React from 'react'

import '../styles/collection-item.scss'
import CustomButton from './shared/custom-button'
import { useDispatch } from 'react-redux'
import { addItem } from '../store/cart/actions'

function CollectionItem({ item }) {
	const dispatch = useDispatch()

	const dispatchAddItem = () => {
		dispatch(addItem(item))
	}

	const { imageUrl, name, price } = item

	return (
		<div className='collection-item'>
			<div
				className='image'
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
			/>
			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<CustomButton inverted onClick={dispatchAddItem}>Add to Cart</CustomButton>
  	</div>
	)
}

export default CollectionItem
