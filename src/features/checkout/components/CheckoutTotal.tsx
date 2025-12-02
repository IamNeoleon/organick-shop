import React, { useMemo, useState } from 'react';
import { selectCart } from '@/features/cart/model';
import { useAppSelector } from '@/shared/hooks';
import { DISCOUNTS_CODES } from '@/shared/constants';
import { calculateCartTotal } from '@/utils';
import classNames from 'classnames';
import { LockKeyhole } from 'lucide-react';


export const CheckoutTotal: React.FC = () => {
	const { cartItems } = useAppSelector(selectCart)
	const [discountValue, setDiscountValue] = useState<string>('')
	const [discount, setDiscount] = useState<number>(0)
	const [hasDiscount, setHasDiscount] = useState(false)
	const cartTotal = calculateCartTotal(cartItems)

	const calcDiscount = () => {
		const discountItem = DISCOUNTS_CODES.find(item => item.code === discountValue)

		if (discountItem) {
			setDiscount(discountItem.discount)
			setHasDiscount(true)
		} else {
			setDiscount(0)
			setDiscountValue('Discount not found')
		}
	}

	const { total, discountSum, sumWithoutDiscount, shippingPrice } = useMemo(() => {
		const shippingPrice = 5
		const sumWithoutDiscount = cartTotal + shippingPrice

		const discountSum = discount
			? (sumWithoutDiscount * discount) / 100
			: 0

		const total = sumWithoutDiscount - discountSum

		return {
			sumWithoutDiscount,
			discountSum: Math.round(discountSum),
			total: Math.round(total),
			shippingPrice
		}
	}, [cartTotal, discount])

	return (
		<>
			<div className='relative'>
				<input
					disabled={hasDiscount}
					className={
						classNames(
							`block text-lg border-[3px] outline-none
							px-4 py-3 rounded-lg w-full
							transition-all
							focus:border-mint
							font-medium
							bg-transparent`, {
							'text-gray-400': hasDiscount
						}
						)
					}
					placeholder='🎟  Discount code'
					type="text"
					value={discountValue}
					onChange={(e) => setDiscountValue(e.target.value)}
				/>
				<button disabled={hasDiscount} onClick={calcDiscount}
					className={classNames(
						`transition-colors hover:text-[#4a6454]
					 text-mint font-bold text-lg absolute top-1/2 right-6
					 -translate-y-1/2`, {
						'text-gray-400 hover:text-gray-400': hasDiscount
					}
					)}
				>Apply</button>
			</div>
			<div className='mt-4 flex flex-col gap-2 mb-5'>
				<div className='flex justify-between items-center'>
					<span className='text-gray-400 font-medium font-osans text-lg'>Subtotal</span>
					<span className='text-lg font-medium'>${sumWithoutDiscount}</span>
				</div>
				<div className='flex justify-between items-center'>
					<span className='text-gray-400 font-medium font-osans text-lg'>Shipping</span>
					<span className='text-lg font-medium'>${shippingPrice}</span>
				</div>
				<div className='flex justify-between items-center'>
					<span className='text-gray-400 font-medium font-osans text-lg'>Discount</span>
					<span className='text-lg font-medium'>{discountSum ? `-$${discountSum}` : '$0'}</span>
				</div>
				<div className='flex justify-between items-center text-xl pt-1'>
					<span className='font-bold font-osans'>Total</span>
					<span className='font-medium'>${total}</span>
				</div>
			</div>
			<button className='hover:brightness-75 transition py-5 bg-primary text-white w-full rounded-xl text-lg font-bold'>Pay Now</button>
			<div className='mt-5'>
				<div className='flex gap-3 items-center text-xl font-bold mb-2'><LockKeyhole color='#274c5b' />  <span>Secure Checkout - SSL Encrypted</span></div>
				<div className='text'>
					Ensuring your financial and personal details are secure during every transactions.
				</div>
			</div>
		</>
	);
};