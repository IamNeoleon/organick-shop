import classNames from 'classnames';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'yellow' | 'ghost'

interface IButtonProps {
   variant: ButtonVariant,
   text: string,
   type?: 'button' | 'reset' | 'submit'
   onClick?: () => void;
   to?: string;
   arrow?: boolean
}

const variantStyles: Record<ButtonVariant, string> = {
   primary: 'bg-primary text-white',
   yellow: 'bg-yellow text-primary',
   ghost: 'text-primary border-2 border-primary',
};

const Button: React.FC<IButtonProps> = ({ variant = 'primary', text, onClick, to, arrow = true, type = 'button' }) => {
   const baseClasses = classNames(
      'text-capitalize inline-flex gap-[10px] items-center text-xl font-bold rounded-2xl py-6 px-10 cursor-pointer hover:opacity-70 transition-opacity duration-200 max-[425px]:py-4 max-[425px]:text-[16px]',
      variantStyles[variant]
   );

   const content = (
      <>
         <span>{text}</span>
         {
            arrow && (
               <div className="bg-t w-[19px] h-[19px] bg-[#335B6B] text-white flex justify-center items-center rounded-full">
                  <ArrowRight width={13} />
               </div>
            )
         }
      </>
   );

   return to ? (
      <Link to={to} className={baseClasses}>
         {content}
      </Link>
   ) : (
      <button type={type} onClick={onClick} className={baseClasses}>
         {content}
      </button>
   );
};

export default Button;