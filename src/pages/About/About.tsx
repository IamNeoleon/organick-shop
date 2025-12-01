import React from 'react';
import { HeroBanner, NewsletterBlock } from '@/widgets/'
import { PageWrapper } from '@/shared/layouts';
import { AboutSection, Choose, Team, Categories } from './sections'
import aboutBannerImg from '@/assets/images/hero-banners/about.jpg';
import { Reveal } from '@/shared/ui';

const About: React.FC = () => {
   return (
      <>
         <PageWrapper>
            <HeroBanner image={aboutBannerImg} text='About Us' />
            <Reveal variant='up' delay={0.2}>
               <AboutSection />
            </Reveal>
            <Reveal variant='up' delay={0.2}>
               <Choose />
            </Reveal>
            <Reveal variant='up' delay={0.2}>
               <Team />
            </Reveal>
            <Reveal variant='up' delay={0.2}>
               <Categories />
            </Reveal>
            <section className='section pb-28'>
               <div className="container">
                  <NewsletterBlock />
               </div>
            </section>
         </PageWrapper>
      </>
   );
};

export default About;