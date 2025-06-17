import React, { useEffect, useState } from 'react';

interface IDropdownProps {
   options: string[],
   selected: string,
   onSelect: (value: string) => void;
   defaultValue: string
   label?: string,
}

const Dropdown: React.FC<IDropdownProps> = ({ options, selected, onSelect, defaultValue }) => {
   const [open, setOpen] = useState(false);
   const [value, setValue] = useState<string>()

   useEffect(() => {
      if (!selected) {
         setValue(defaultValue);
      }
   }, [selected, onSelect]);

   return (
      <>
         <div className="relative text-lg text-primary font-medium max-xs:w-full">
            <button
               type="button"
               className="border rounded-lg px-6 py-3 w-56 text-left bg-white first-letter:uppercase max-xs:w-full"
               onClick={() => setOpen((prev) => !prev)}
            >
               {selected ? selected : value}
            </button>
            {open && (
               <div className="absolute z-10 mt-1 w-full bg-white border rounded-lg shadow">
                  {options.map((option) => (
                     <div
                        key={option}
                        className={`first-letter:uppercase px-6 py-3 cursor-pointer hover:bg-gray-100 ${option === selected ? 'bg-gray-200' : ''
                           }`}
                        onClick={() => {
                           onSelect(option);
                           setOpen(false);
                        }}
                     >
                        {option}
                     </div>
                  ))}
                  <div
                     className={`first-letter:uppercase px-6 py-3 cursor-pointer hover:bg-gray-100 ${!selected ? 'bg-gray-200' : ''
                        }`}
                     onClick={() => {
                        onSelect("");
                        setOpen(false);
                     }}
                  >
                     {value}
                  </div>
               </div>
            )}
         </div>
      </>
   );
};

export default Dropdown;