import React from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../services/firebase'
import { useSelector, useDispatch } from 'react-redux'

import '../styles/header.scss'
import { ReactComponent as Logo } from '../assets/crown.svg';
import CartIcon from './cart-icon'
import CartDropdown from './cart-dropdown'
import { setCurrentUser } from '../store/user/actions'
import { selectCurrentUser } from '../store/user/selectors'
import { selectCartHidden } from '../store/cart/selectors'

function Header() {
	const dispatch = useDispatch()
	const user = useSelector(selectCurrentUser)
	const cartHidden = useSelector(selectCartHidden)

	const dispatchSignout = () => {
		auth.signOut()
		dispatch(setCurrentUser(null))
	}
	
	return (
		<div className='header'>
			<Link className='logo-container' to='/'>
				<Logo className='logo' />
			</Link>
			<div className='options'>
				<Link className='option' to='/shop'>
					SHOP
				</Link>
				<Link className='option' to='/shop'>
					CONTACT
				</Link>
				{
					user ? 
						<div className='option' onClick={dispatchSignout}>SIGNOUT</div> : 
						<Link className='option' to='/signin'>
							SIGNIN
						</Link>
				}
				<CartIcon />
			</div>
			{cartHidden ? null : <CartDropdown />}
		</div>
	)
}

export default Header
