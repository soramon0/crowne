import React from 'react'

import { useDispatch } from 'react-redux'
import { addItem } from '../../store/cart/actions'

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './shop.styles';

function CollectionItem({ item }) {
	const dispatch = useDispatch()

	const dispatchAddItem = () => {
		dispatch(addItem(item))
	}

	const { imageUrl, name, price } = item

	return (
		<CollectionItemContainer>
			<BackgroundImage className='image' imageUrl={imageUrl} />
			<CollectionFooterContainer>
				<NameContainer>{name}</NameContainer>
				<PriceContainer>{price}</PriceContainer>
			</CollectionFooterContainer>
			<AddButton inverted onClick={dispatchAddItem}>Add to Cart</AddButton>
  	</CollectionItemContainer>
	)
}

export default CollectionItem
