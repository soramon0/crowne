import React from 'react'
import '../styles/header.scss'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/crown.svg';
import { auth } from '../services/firebase'
import { useSelector, useDispatch } from 'react-redux'
import CartIcon from './cart-icon'
import CartDropdown from './cart-dropdown'
import { setCurrentUser } from '../store/user/actions'


function Header() {
	const dispatch = useDispatch()
	const user = useSelector(({ user }) => user.currentUser)
	const cartHidden = useSelector(({ cart }) => cart.hidden)

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
						<div class='option' onClick={dispatchSignout}>SIGNOUT</div> : 
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
