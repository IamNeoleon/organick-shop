import React from 'react';

export const CheckoutForm: React.FC = () => {
	const [agreed, setAgreed] = React.useState<boolean>(false);

	return (
		<>
			<form action="" className='flex flex-col gap-4'>
				<div>
					<label htmlFor="checkout-name" className='text-lg text-primary font-bold mb-2'>Full name</label>
					<input
						className='
							block text-lg border-[3px] outline-none
							px-4 py-3 rounded-lg w-full
							transition-all
							focus:border-mint
						'
						placeholder='Enter full name'
						id='checkout-name'
						type="text"
					/>
				</div>
				<div>
					<label htmlFor="checkout-email" className='text-lg text-primary font-bold mb-2'>Email address</label>
					<input
						className='
							block text-lg border-[3px] outline-none
							px-4 py-3 rounded-lg w-full
							transition-all
							focus:border-mint
						'
						placeholder='Enter email'
						id='checkout-email'
						type="email"
					/>
				</div>
				<div>
					<label htmlFor="checkout-phone" className='text-lg text-primary font-bold mb-2'>Phone number</label>
					<input
						className='
							block text-lg border-[3px] outline-none
							px-4 py-3 rounded-lg w-full
							transition-all
							focus:border-mint
						'
						placeholder='Enter phone number'
						id='checkout-phone'
						type="text"
					/>
				</div>
				<div>
					<label htmlFor="checkout-country" className='text-lg text-primary font-bold mb-2'>Country</label>
					<input
						className='
							block text-lg border-[3px] outline-none
							px-4 py-3 rounded-lg w-full
							transition-all
							focus:border-mint
						'
						placeholder='Enter country'
						id='checkout-country'
						type="text"
					/>
				</div>
				<div className='grid grid-cols-3 gap-3 max-[552px]:grid-cols-1'>
					<div>
						<label htmlFor="checkout-city" className='text-lg text-primary font-bold mb-2'>City</label>
						<input
							className='
								block text-lg border-[3px] outline-none
								px-4 py-3 rounded-lg w-full
								transition-all
								focus:border-mint
							'
							placeholder='Enter city'
							id='checkout-city'
							type="text"
						/>
					</div>
					<div>
						<label htmlFor="checkout-state" className='text-lg text-primary font-bold mb-2'>State</label>
						<input
							className='
								block text-lg border-[3px] outline-none
								px-4 py-3 rounded-lg w-full
								transition-all
								focus:border-mint
							'
							placeholder='Enter state'
							id='checkout-state'
							type="text"
						/>
					</div>
					<div>
						<label htmlFor="checkout-zip" className='text-lg text-primary font-bold mb-2'>ZIP Code</label>
						<input
							className='
								block text-lg border-[3px] outline-none
								px-4 py-3 rounded-lg w-full
								transition-all
								focus:border-mint
							'
							placeholder='Enter ZIP code'
							id='checkout-zip'
							type="text"
						/>
					</div>
				</div>
				<div className="flex items-start gap-3 mt-2">
					<label htmlFor="checkout-save-info" className="inline-flex items-center cursor-pointer select-none">
						<input
							id="checkout-save-info"
							type="checkbox"
							className="sr-only"
							checked={agreed}
							onChange={() => setAgreed(!agreed)}
						/>
						<span
							className={`w-6 h-6 flex items-center justify-center border-2 rounded-md transition-all ${agreed ? 'bg-mint border-mint text-white' : 'border-gray-300 bg-transparent'
								}`}
							aria-hidden="true"
						>
							{agreed && (
								<svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1 5L5 9L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							)}
						</span>
						<span className="ml-3 text-primary text-lg font-medium">I have read and agree to the Terms and Conditions</span>
					</label>
				</div>
			</form>
		</>
	);
};