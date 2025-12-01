import React, { useEffect, useRef, useState } from 'react';
import { Search } from 'lucide-react';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { selectFilters, setSearchValue } from '../model';
import { useLocation, useNavigate } from 'react-router-dom';

const SearchBlock: React.FC = () => {
   const location = useLocation();
   const dispatch = useAppDispatch();
   const navigate = useNavigate();
   const { searchValue } = useAppSelector(selectFilters);
   const [localValue, setLocalValue] = useState(searchValue);
   const [visible, setVisible] = useState(false);
   const inputRef = useRef<HTMLInputElement>(null)

   const handleChangeValue = (value: string) => {
      if (location.pathname !== '/shop') {
         navigate('/shop')
      }

      setLocalValue(value);
   }

   const handleClickSearch = () => {
      setVisible(prev => !prev)
   }

   useEffect(() => {
      if (visible && inputRef.current) {
         inputRef.current.focus();
      }
   }, [visible]);

   useEffect(() => {
      const timer = setTimeout(() => {
         dispatch(setSearchValue(localValue))
      }, 500);

      return () => clearTimeout(timer)
   }, [localValue, dispatch])

   return (
      <>
         <div className='max-xl:w-[250px] w-[376px] max-lg:w-auto relative lg:bg-lgGrey rounded-[36px]'>
            <input ref={inputRef} value={localValue} onChange={(e) => handleChangeValue(e.target.value)}
               className={classNames('max-lg:transition-opacity max-lg:opacity-0 font-osans text-lg font-medium outline-none w-full pl-5 h-full py-5 bg-transparent',
                  { 'max-lg:z-20 max-lg:rounded max-lg:opacity-100 max-lg:fixed max-lg:left-1/2 max-lg:-translate-x-1/2 top-24 max-lg:w-[99%] max-lg:h-4 max-lg:bg-white max-lg:border max-lg:border-black': visible }
               )}
               type="text" />
            <div
               onClick={handleClickSearch}
               className='w-14 h-14 max-md:w-12 max-[375px]:w-11 max-md:h-12 max-[375px]:h-11 bg-mint absolute top-2/4 -translate-y-1/2 right-2 rounded-full flex justify-center items-center'>
               <Search width={21} height={21} color='#fff' />
            </div>
         </div>
      </>
   );
};

export default SearchBlock; ``