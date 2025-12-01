import React from 'react';
import { Intro, Promo, About, Products, Testimonials, Offer, PromoEco, Catalog, News } from './sections'
import { PageWrapper } from '@/shared/layouts';
import { NewsletterBlock } from '@/widgets'
import { Reveal } from '@/shared/ui';

const Home: React.FC = () => {
   return (
      <>
         <PageWrapper>
            <Intro />
            <Reveal variant='up' delay={0.2}>
               <Promo />
            </Reveal>
            <Reveal variant='up' delay={0.2}>
               <About />
            </Reveal>
            <Reveal variant='up' delay={0.2}>
               <Products />
            </Reveal>
            <Reveal variant='up' delay={0.2}>
               <Testimonials />
            </Reveal>
            <Reveal variant='up' delay={0.2}>
               <Offer />
            </Reveal>
            <Reveal variant='up' delay={0.2}>
               <PromoEco />
            </Reveal>
            <Reveal variant='up' delay={0.2}>
               <Catalog />
            </Reveal>
            <Reveal variant='up' delay={0.2}>
               <News />
            </Reveal>
            <NewsletterBlock />
         </PageWrapper>
      </>
   );
};

export default Home;