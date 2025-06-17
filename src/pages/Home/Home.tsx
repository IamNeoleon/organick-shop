import React from 'react';
import { Intro, Promo, About, Products, Testimonials, Offer, PromoEco, Catalog, News } from './sections'
import { PageWrapper } from '@/shared/layouts';
import { NewsletterBlock } from '@/widgets'

const Home: React.FC = () => {
   return (
      <>
         <PageWrapper>
            <Intro />
            <Promo />
            <About />
            <Products />
            <Testimonials />
            <Offer />
            <PromoEco />
            <Catalog />
            <News />
            <NewsletterBlock />
         </PageWrapper>
      </>
   );
};

export default Home;