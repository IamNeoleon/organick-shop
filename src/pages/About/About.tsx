import React from 'react';
import { HeroBanner, NewsletterBlock } from '@/widgets/'
import { PageWrapper } from '@/shared/layouts';
import { AboutSection, Choose, Team, Categories } from './sections'
import aboutBannerImg from '@/assets/images/hero-banners/about.jpg';

const About: React.FC = () => {
   return (
      <>
         <PageWrapper>
            <HeroBanner image={aboutBannerImg} text='About Us' />
            <AboutSection />
            <Choose />
            <Team />
            <Categories />
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