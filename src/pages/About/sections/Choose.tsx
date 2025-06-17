import React from 'react';
import chooseImg from '@/assets/images/pages/about/choose/01.jpg';
import cartSvg from '@/assets/icons/cart.svg';
import petalsSvg from '@/assets/icons/petals.svg';
import supportSvg from '@/assets/icons/support.svg';
import walletSvg from '@/assets/icons/wallet.svg';

const Choose: React.FC = () => {
   return (
      <>
         <section className='section bg-lgGrey'>
            <div className="container">
               <div className='flex max-lg:flex-col max-lg:text-center max-lg:gap-4 mb-20 max-md:mb-12 max-sm:mb-8'>
                  <div className='basis-1/2'>
                     <div className="subtext">Why Choose us?</div>
                     <h1 className='title leading-snug'>We do not buy from the <br />
                        open market & traders.</h1>
                     <p className='text mb-9 max-lg:mb-4'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</p>
                     <div className='mb-6'>
                        <div className='max-lg:pr-7 mb-3 p-7 pr-24 inline-flex items-center gap-2 bg-[#ececec] rounded-[50px] '>
                           <div className='w-[19px] h-[19px] rounded-full border-mint border-[4px]'></div>
                           <span className='text-primary text-xl font-semibold'>100% Natural Product</span>
                        </div>
                        <p className='text pl-14 max-w-[445px] max-lg:max-w-full max-lg:p-0'>
                           Simply dummy text of the printing and typesetting industry Lorem Ipsum
                        </p>
                     </div>
                     <div>
                        <div className='max-lg:pr-7 mb-3 p-7 pr-24 inline-flex items-center gap-2 bg-[#ececec] rounded-[50px] '>
                           <div className='w-[19px] h-[19px] rounded-full border-mint border-[4px]'></div>
                           <span className='text-primary text-xl font-semibold'> Increases resistance</span>
                        </div>
                        <p className='text pl-14 max-w-[445px] max-lg:max-w-full max-lg:p-0'>
                           Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing
                        </p>
                     </div>
                  </div>
                  <div className='basis-1/2'>
                     <div className='pl-12 max-lg:flex max-lg:justify-center max-lg:p-0'>
                        <img src={chooseImg} alt="choose image" className='rounded-3xl' />
                     </div>
                  </div>
               </div>
               <div className='max-lg:max-w-full max-lg:grid-cols-2 max-xs:grid-cols-1 max-w-[1120px] grid grid-cols-4 gap-7 mx-auto text-center'>
                  <div className='px-9 py-9 max-sm:py-4 bg-white flex flex-col items-center rounded-[30px]'>
                     <div className='bg-lgGrey w-24 h-24 flex justify-center items-center mb-3 rounded-[18px]'>
                        <img src={cartSvg} alt="cart icon" />
                     </div>
                     <div className='text-2xl text-primary font-extrabold mb-2'>Return Policy</div>
                     <p className='text'>Simply dummy text of the printintypesetting industry.</p>
                  </div>
                  <div className='px-9 py-9 max-sm:py-4 bg-white flex flex-col items-center rounded-[30px]'>
                     <div className='bg-lgGrey w-24 h-24 flex justify-center items-center mb-3 rounded-[18px]'>
                        <img src={petalsSvg} alt="petals icon" />
                     </div>
                     <div className='text-2xl text-primary font-extrabold mb-2'>100% Fresh</div>
                     <p className='text'>Simply dummy text of the printintypesetting industry.</p>
                  </div>
                  <div className='px-9 py-9 max-sm:py-4 bg-white flex flex-col items-center rounded-[30px]'>
                     <div className='bg-lgGrey w-24 h-24 flex justify-center items-center mb-3 rounded-[18px]'>
                        <img src={supportSvg} alt="support icon" />
                     </div>
                     <div className='text-2xl text-primary font-extrabold mb-2'>Support 24/7</div>
                     <p className='text'>Simply dummy text of the printintypesetting industry.</p>
                  </div>
                  <div className='px-9 py-9 max-sm:py-4 bg-white flex flex-col items-center rounded-[30px]'>
                     <div className='bg-lgGrey w-24 h-24 flex justify-center items-center mb-3 rounded-[18px]'>
                        <img src={walletSvg} alt="wallet icon" />
                     </div>
                     <div className='text-2xl text-primary font-extrabold mb-2'>Secured Payment</div>
                     <p className='text'>Simply dummy text of the printintypesetting industry.</p>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Choose;