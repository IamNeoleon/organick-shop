import React, { useState } from 'react';
import { Search, ShoppingCart } from 'lucide-react';
import logo from '../../assets/main-logo.svg';
import classNames from 'classnames';

const Header: React.FC = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [isOpenMenu, setIsOpenMenu] = useState(false);

	const handleOpenMenu = () => {
		setIsOpenMenu(prev => !prev)
		document.querySelector('body')?.classList.toggle('lock')
	}

	return (
		<header className='py-10 max-lg:py-7 max-md:py-4'>
			<div className="max-w-[1630px] mx-auto px-[15px]">
				<div className="relative flex justify-between items-center ">
					<a href='#' className='max-md:max-w-[150px] max-[375px]:max-w-[120px]'>
						<img src={logo} alt="header logo" />
					</a>
					<nav className={classNames("transition-left duration-200 max-lg:-left-full max-lg:fixed max-lg:top-0  max-lg:z-10 max-lg:flex-col max-lg:bg-white max-lg:w-full max-lg:h-full max-lg:items-center max-lg:justify-center flex gap-6 relative", { 'max-lg:left-0 overflow-auto': isOpenMenu })}>
						<a href="#" className='nav-link underline-hover'>
							Home
						</a>
						<a href="#" className="nav-link underline-hover">
							About
						</a>
						<a
							href='#'
							className="nav-link underline-hover"
							onMouseEnter={() => setIsDropdownOpen(true)}
							onMouseLeave={() => setIsDropdownOpen(false)}
						>
							Pages
							{isDropdownOpen && (
								<div className="absolute top-full left-0 w-40 bg-white border rounded shadow-lg z-50">
									<a
										href="#"
										className="block px-4 py-2 text-sm text-primary hover:bg-gray-100"
									>
										Subpage 1
									</a>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-primary hover:bg-gray-100"
									>
										Subpage 2
									</a>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-primary hover:bg-gray-100"
									>
										Subpage 3
									</a>
								</div>
							)}
						</a>
						<a href="#" className="nav-link underline-hover">
							Shop
						</a>
						<a href="#" className="nav-link underline-hover">
							Projects
						</a>
						<a href="#" className="nav-link underline-hover">
							News
						</a>
					</nav>
					<div className='flex items-center'>
						<div className='max-xl:w-[250px] w-[376px] max-lg:w-auto relative lg:bg-lgGrey rounded-[36px]'>
							<input className='max-lg:hidden font-osans text-lg font-medium outline-none w-full pl-5 h-full py-5 bg-transparent' type="text" />
							<div className='w-14 h-14 max-md:w-12 max-[375px]:w-11 max-md:h-12 max-[375px]:h-11 bg-mint absolute top-2/4 -translate-y-1/2 right-2 rounded-full flex justify-center items-center'>
								<Search width={21} height={21} color='#fff' />
							</div>
						</div>
						<div className="flex items-center rounded-[36px] lg:border border-grey py-2 px-2">
							<div className='w-14 h-14 max-md:w-12 max-[375px]:w-11 max-md:h-12 max-[375px]:h-11 mr-3 bg-primary rounded-full flex justify-center items-center relative'>
								<ShoppingCart width={21} height={21} color='#fff' />
								<div className='lg:hidden absolute -bottom-1 -right-1 flex w-6 h-6 justify-center items-center rounded-full bg-mint'>
									<span className='block text-white leading-6 font-medium text-sm'>3</span>
								</div>
							</div>
							<span className='hidden lg:block text-lg font-semibold'>Cart (0)</span>
						</div>
						<div onClick={handleOpenMenu} className='z-10 max-lg:block hidden w-8 h-6 relative'>
							<span className={classNames('transition-transform duration-200 absolute top-0 left-0 w-full h-[3px] bg-primary', { 'rotate-45 top-2/4 -translate-y-2/4': isOpenMenu })}></span>
							<span className={classNames('transition-opacity duration-200 absolute top-2/4 -translate-y-2/4 left-0 w-full h-[3px] bg-primary', { 'opacity-0': isOpenMenu })}></span>
							<span className={classNames('transition-transform duration-200 absolute bottom-0 left-0 w-full h-[3px] bg-primary', { '-rotate-45 top-2/4 -translate-y-2/4': isOpenMenu })}></span>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
