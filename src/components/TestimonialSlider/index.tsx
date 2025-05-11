import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'
import testimonialImage from '../../assets/testimonials/1.jpg';

const testimonials = [
   {
      name: 'Sara Taylor',
      role: 'Consumer',
      image: testimonialImage,
      text: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text.',
   },
   {
      name: 'Sara Taylor',
      role: 'Consumer',
      image: testimonialImage,
      text: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text.',
   },
   {
      name: 'Sara Taylor',
      role: 'Consumer',
      image: testimonialImage,
      text: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text.',
   }
]

const TestimonialSlider = () => {
   return (
      <div className="pb-24 border-b max-w-3xl mx-auto text-center">
         <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 50000 }}
            loop={true}
         >
            {testimonials.map((t, index) => (
               <SwiperSlide key={index}>
                  <div className="py-8 flex flex-col items-center">
                     <img
                        src={t.image}
                        alt={t.name}
                        className="w-24 h-24 rounded-full border-4 border-gray-200 mb-4"
                     />
                     <div className='flex gap-[2px] mb-4'>
                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M6.67806 1.09367C6.98566 0.189974 8.26378 0.189977 8.57138 1.09367L9.5549 3.98313C9.69285 4.3884 10.0735 4.66091 10.5016 4.66091H13.5818C14.5617 4.66091 14.9569 5.92416 14.1517 6.48262L11.7409 8.15456C11.3741 8.40901 11.2203 8.87584 11.3642 9.29851L12.3036 12.0586C12.6145 12.9718 11.5798 13.7523 10.7871 13.2025L8.19462 11.4046C7.85187 11.1668 7.39758 11.1668 7.05483 11.4046L4.46235 13.2025C3.66969 13.7523 2.63496 12.9718 2.9458 12.0586L3.88528 9.29851C4.02915 8.87584 3.87539 8.40901 3.50851 8.15456L1.09777 6.48263C0.292535 5.92416 0.687722 4.66091 1.66767 4.66091H4.74788C5.17598 4.66091 5.55659 4.3884 5.69454 3.98313L6.67806 1.09367Z" fill="#FFA858" />
                        </svg>
                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M6.67806 1.09367C6.98566 0.189974 8.26378 0.189977 8.57138 1.09367L9.5549 3.98313C9.69285 4.3884 10.0735 4.66091 10.5016 4.66091H13.5818C14.5617 4.66091 14.9569 5.92416 14.1517 6.48262L11.7409 8.15456C11.3741 8.40901 11.2203 8.87584 11.3642 9.29851L12.3036 12.0586C12.6145 12.9718 11.5798 13.7523 10.7871 13.2025L8.19462 11.4046C7.85187 11.1668 7.39758 11.1668 7.05483 11.4046L4.46235 13.2025C3.66969 13.7523 2.63496 12.9718 2.9458 12.0586L3.88528 9.29851C4.02915 8.87584 3.87539 8.40901 3.50851 8.15456L1.09777 6.48263C0.292535 5.92416 0.687722 4.66091 1.66767 4.66091H4.74788C5.17598 4.66091 5.55659 4.3884 5.69454 3.98313L6.67806 1.09367Z" fill="#FFA858" />
                        </svg>
                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M6.67806 1.09367C6.98566 0.189974 8.26378 0.189977 8.57138 1.09367L9.5549 3.98313C9.69285 4.3884 10.0735 4.66091 10.5016 4.66091H13.5818C14.5617 4.66091 14.9569 5.92416 14.1517 6.48262L11.7409 8.15456C11.3741 8.40901 11.2203 8.87584 11.3642 9.29851L12.3036 12.0586C12.6145 12.9718 11.5798 13.7523 10.7871 13.2025L8.19462 11.4046C7.85187 11.1668 7.39758 11.1668 7.05483 11.4046L4.46235 13.2025C3.66969 13.7523 2.63496 12.9718 2.9458 12.0586L3.88528 9.29851C4.02915 8.87584 3.87539 8.40901 3.50851 8.15456L1.09777 6.48263C0.292535 5.92416 0.687722 4.66091 1.66767 4.66091H4.74788C5.17598 4.66091 5.55659 4.3884 5.69454 3.98313L6.67806 1.09367Z" fill="#FFA858" />
                        </svg>
                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M6.67806 1.09367C6.98566 0.189974 8.26378 0.189977 8.57138 1.09367L9.5549 3.98313C9.69285 4.3884 10.0735 4.66091 10.5016 4.66091H13.5818C14.5617 4.66091 14.9569 5.92416 14.1517 6.48262L11.7409 8.15456C11.3741 8.40901 11.2203 8.87584 11.3642 9.29851L12.3036 12.0586C12.6145 12.9718 11.5798 13.7523 10.7871 13.2025L8.19462 11.4046C7.85187 11.1668 7.39758 11.1668 7.05483 11.4046L4.46235 13.2025C3.66969 13.7523 2.63496 12.9718 2.9458 12.0586L3.88528 9.29851C4.02915 8.87584 3.87539 8.40901 3.50851 8.15456L1.09777 6.48263C0.292535 5.92416 0.687722 4.66091 1.66767 4.66091H4.74788C5.17598 4.66091 5.55659 4.3884 5.69454 3.98313L6.67806 1.09367Z" fill="#FFA858" />
                        </svg>
                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M6.67806 1.09367C6.98566 0.189974 8.26378 0.189977 8.57138 1.09367L9.5549 3.98313C9.69285 4.3884 10.0735 4.66091 10.5016 4.66091H13.5818C14.5617 4.66091 14.9569 5.92416 14.1517 6.48262L11.7409 8.15456C11.3741 8.40901 11.2203 8.87584 11.3642 9.29851L12.3036 12.0586C12.6145 12.9718 11.5798 13.7523 10.7871 13.2025L8.19462 11.4046C7.85187 11.1668 7.39758 11.1668 7.05483 11.4046L4.46235 13.2025C3.66969 13.7523 2.63496 12.9718 2.9458 12.0586L3.88528 9.29851C4.02915 8.87584 3.87539 8.40901 3.50851 8.15456L1.09777 6.48263C0.292535 5.92416 0.687722 4.66091 1.66767 4.66091H4.74788C5.17598 4.66091 5.55659 4.3884 5.69454 3.98313L6.67806 1.09367Z" fill="#FFA858" />
                        </svg>
                     </div>
                     <p className="text-gray-600 mb-5 max-w-xl">{t.text}</p>
                     <div>
                        <p className="font-bold text-lg text-primary">{t.name}</p>
                        <p className="text-sm text-gray-500">{t.role}</p>
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   )
}

export default TestimonialSlider