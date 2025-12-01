import React, { useEffect, useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import SearchBlock from '@/features/product/components/SearchBlock';
import logo from '@/assets/icons/main-logo.svg';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { selectCart, setCartFromLs, TCartProduct } from '@/features/cart/model';
import { getCartFromLs, saveCartToLs } from '../../utils';


const LINKS = [
	{
		title: 'Home',
		url: '/'
	},
	{
		title: 'About',
		url: '/about'
	},
	{
		title: 'Shop',
		url: '/shop'
	},
]

const Header: React.FC = () => {
	const dispatch = useAppDispatch()
	const { cartItems } = useAppSelector(selectCart)
	const cartCount = cartItems.length;
	const [isOpenMenu, setIsOpenMenu] = useState(false);

	const handleOpenMenu = () => {
		setIsOpenMenu(prev => !prev)
		document.querySelector('body')?.classList.toggle('lock')
	}

	useEffect(() => {
		const cartFromLs: TCartProduct[] = getCartFromLs();
		if (cartItems.length === 0 && cartFromLs.length > 0) {
			dispatch(setCartFromLs(cartFromLs));
		}
	}, [dispatch]);

	useEffect(() => {
		saveCartToLs(cartItems);
	}, [cartItems, dispatch]);


	return (
		<header className='py-10 max-lg:py-7 max-md:py-4'>
			<div className="container">
				<div className="relative flex justify-between items-center ">
					<Link to='/' className='max-md:max-w-[150px] max-[375px]:max-w-[120px]'>
						<img src={logo} alt="header logo" />
					</Link>
					<nav className={classNames(
						"transition-left duration-200 max-lg:-left-full max-lg:fixed max-lg:top-0 max-lg:z-10 max-lg:flex-col max-lg:bg-white max-lg:w-full max-lg:h-full max-lg:items-center max-lg:justify-center flex gap-6 relative",
						{ 'max-lg:left-0 overflow-auto': isOpenMenu }
					)}>
						{
							LINKS.map((link, idx) => <Link key={idx} to={link.url} className='nav-link underline-hover'>{link.title}</Link>)
						}
					</nav>
					<div className='flex items-center'>
						<SearchBlock />
						<div className="flex items-center rounded-[36px] lg:border border-grey py-2 px-2">
							<Link to='/cart'>
								<div className='w-14 h-14 max-md:w-12 max-[375px]:w-11 max-md:h-12 max-[375px]:h-11 mr-3 bg-primary rounded-full flex justify-center items-center relative'>
									<ShoppingCart width={21} height={21} color='#fff' />
									<div className='lg:hidden absolute -bottom-1 -right-1 flex w-6 h-6 justify-center items-center rounded-full bg-mint'>
										<span className='block text-white leading-6 font-medium text-sm'>{cartCount}</span>
									</div>
								</div>
							</Link>
							<span className='hidden lg:block text-lg font-semibold'>Cart ({cartCount})</span>
						</div>
						<div onClick={handleOpenMenu} className='z-10 max-lg:block hidden w-8 h-6 relative'>
							<span className={classNames('transition-transform duration-200 absolute top-0 left-0 w-full h-[3px] bg-primary', { 'rotate-45 top-2/4 -translate-y-2/4': isOpenMenu })}></span>
							<span className={classNames('transition-opacity duration-200 absolute top-2/4 -translate-y-2/4 left-0 w-full h-[3px] bg-primary', { 'opacity-0': isOpenMenu })}></span>
							<span className={classNames('transition-transform duration-200 absolute bottom-0 left-0 w-full h-[3px] bg-primary', { '-rotate-45 top-2/4 -translate-y-2/4': isOpenMenu })}></span>
						</div>
					</div>
				</div>
			</div>
		</header >
	);
};

export default Header;
