import React from 'react';
import { HeroBanner, NewsletterBlock } from '@/widgets';
import ShopFilters from '@/features/product/components/ShopFilters';
import ProductListContainer from '@/features/product/ProductListContainer';
import { PageWrapper } from '@/shared/layouts';
import shopBannerImg from '@/assets/images/hero-banners/shop.jpg';

const Shop: React.FC = () => {

   return (
      <>
         <PageWrapper>
            <HeroBanner image={shopBannerImg} text='Shop' />
            <ShopFilters />
            <ProductListContainer />
            <div className='mt-14 container'>
               <NewsletterBlock />
            </div>
         </PageWrapper>
      </>
   );
};

export default Shop;