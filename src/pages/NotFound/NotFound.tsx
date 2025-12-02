import { PageWrapper } from '@/shared/layouts';
import Button from '@/shared/ui/Button/Button';
import React from 'react';

const NotFound: React.FC = () => {
	return (
		<>
			<PageWrapper>
				<div className='bg-[#C0CFCF] py-48 text-center max-md:py-24 max-sm:py-16'>
					<h1 className='text-[#8FA8A8] text-9xl font-bold'>404</h1>
					<h2 className='text-5xl text-primary font-extrabold mb-2'>Page not found</h2>
					<p className='text mb-5'>The page you are looking for doesn't exist or has been moved</p>
					<Button text='Go to Homepage' to='/' variant='primary' />
				</div>
			</PageWrapper>
		</>
	);
};

export default NotFound