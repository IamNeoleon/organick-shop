import React from 'react';

interface IStatisticProps {
   title: string,
   text: string
}

const Statistic: React.FC<IStatisticProps> = ({ title, text }) => {
   return (
      <div className='relative w-52 h-52 rounded-full border-mint border-[4px]'>
         <div className="flex justify-center items-center flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] bg-[#f1f1f1] rounded-full text-center">
            <div className='font-extrabold text-primary text-5xl leading-none'>{title}</div>
            <span className='text-lg font-osans font-semibold text-primary'>{text}</span>
         </div>
      </div>
   );
};

export default Statistic;