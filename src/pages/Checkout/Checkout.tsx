import { CheckoutForm } from '@/features/checkout/components/CheckoutForm';
import { CheckoutReview } from '@/features/checkout/components/CheckoutReview';
import { CheckoutTotal } from '@/features/checkout/components/CheckoutTotal';
import { PageWrapper } from '@/shared/layouts';
import { HeroBanner } from '@/widgets';
import bannerImg from '@/assets/images/hero-banners/about.jpg'
import { CheckoutFake } from '@/features/checkout/components/CheckoutFake';

const Checkout: React.FC = () => {
	return (
		<>
			<PageWrapper>
				<HeroBanner text='Checkout' image={bannerImg} />
				<div className='container pt-12 max-w-[1100px] pb-12'>
					<div className='flex pt-5 gap-10 max-md:block'>
						<div className='basis-1/2 max-md:mb-12'>
							<h2 className='sm-title mb-5'>Shipping Information</h2>
							<CheckoutForm />
						</div	>
						<div className='basis-1/2'>
							<h2 className='sm-title mb-5'>Review Your Cart</h2>
							<CheckoutReview />
							<CheckoutTotal />
						</div>
					</div>
				</div>
			</PageWrapper>
		</>
	);
};

export default Checkout