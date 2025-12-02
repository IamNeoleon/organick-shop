import { selectCart } from '@/features/cart/model';
import { useAppSelector } from '@/shared/hooks';
import React from 'react';

export const CheckoutReview: React.FC = () => {
	const { cartItems } = useAppSelector(selectCart)

	return (
		<>
			<div className='flex flex-col gap-4 max-h-[350px] overflow-y-auto mb-9'>
				{cartItems.map(item => (
					<div className='flex gap-5' key={item.id}>
						<div className='border rounded-lg p-1 aspect-[4/4] max-w-[150px]'>
							<img className='block w-full h-full object-cover' src={item.imageUrl} />
						</div>
						<div className='flex flex-col justify-between py-4'>
							<div>
								<div className="text-primary text-xl font-semibold">{item.name}</div>
								<div className='text-lg text-gray-500 font-medium'>{item.quantity}x</div>
							</div>
							<div className='text-xl font-medium'>${item.price}</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};