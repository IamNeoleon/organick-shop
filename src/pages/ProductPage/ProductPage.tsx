import React from 'react';
import { HeroBanner, RelatedProducts, NewsletterBlock } from '@/widgets/';
import { PageWrapper } from '@/shared/layouts';
import bannerImg from '@/assets/images/hero-banners/shop-single.jpg';
import ProductDetailsContainer from '@/features/product/ProductDetailsContainer';

const ProductPage: React.FC = () => {

   return (
      <>
         <PageWrapper>
            <HeroBanner text='Shop single' image={bannerImg} />
            <ProductDetailsContainer />
            <RelatedProducts />
            <NewsletterBlock />
         </PageWrapper >
      </>
   );
};

export default ProductPage;