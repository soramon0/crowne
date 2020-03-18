import React from 'react'
import { useDispatch } from 'react-redux'

import { clearItemFromCart, addItem, removeItem } from '../../store/cart/actions'
import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './checkout.styles';

function CheckoutItem({ item }) {
	const dispatch = useDispatch()

	const clearItem = () => {
		dispatch(clearItemFromCart(item))
	}

	const { name, imageUrl, price, quantity} = item
	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt='item' />
			</ImageContainer>
			<TextContainer className='name'>{name}</TextContainer>
			<QuantityContainer className='quantity'>
				<div className="arrow" onClick={() => dispatch(removeItem(item))}>&#10094;</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => dispatch(addItem(item))}>&#10095;</div>
			</QuantityContainer>
			<TextContainer className='price'>{price}</TextContainer>
			<RemoveButtonContainer className='remove-button' onClick={clearItem}>&#10005;</RemoveButtonContainer>
		</CheckoutItemContainer>
	)
}

export default CheckoutItem
