import React from 'react'
import { auth } from '../../services/firebase'
import { useSelector, useDispatch } from 'react-redux'

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from './cart-icon'
import CartDropdown from './cart-dropdown'
import { signOutStart } from '../../store/user/actions'
import { selectCurrentUser } from '../../store/user/selectors'
import { selectCartHidden } from '../../store/cart/selectors'
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './header.styles';

function Header() {
	const dispatch = useDispatch()
	const user = useSelector(selectCurrentUser)
	const cartHidden = useSelector(selectCartHidden)

	const dispatchSignout = () => {
		auth.signOut()
		dispatch(signOutStart())
	}
	
	return (
		<HeaderContainer>
			<LogoContainer to='/'>
      	<Logo className='logo' />
   	 	</LogoContainer>
			<OptionsContainer>
				<OptionLink to='/shop'>
					SHOP
				</OptionLink>
				<OptionLink to='/shop'>
					CONTACT
				</OptionLink>
				{
					user ? 
						<OptionLink as='div' onClick={dispatchSignout}>SIGNOUT</OptionLink> : 
						<OptionLink to='/signin'>
							SIGNIN
						</OptionLink>
				}
				<CartIcon />
			</OptionsContainer>
			{cartHidden ? null : <CartDropdown />}
		</HeaderContainer>
	)
}

export default Header
