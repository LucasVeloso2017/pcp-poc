import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  onClick?: () => void;
  label:string
  icon?:{
   position:'left' | 'right'
   icon:React.ReactNode
  }
  variant: 'blue' | 'yellow'
  className?:string
}

const Button: React.FC<Props> = ({ onClick, label, variant, icon,className }) => {

   const isBlue = variant === 'blue'
   const isYellow = variant === 'yellow'

  return (
    <button
      onClick={onClick}
      className={twMerge(
         'h-12 rounded-3xl flex flex-row items-center justify-center font-dm-sans font-bold text-[16px] bg-white cursor-pointer',
         isBlue && 'bg-app-brand-primary-200 text-white font-bold gap-2 uppercase',
         isYellow && 'bg-app-brand-secondary-100 text-app-neutral-900 font-bold gap-2 uppercase',
         className,
      )}
    >
      {icon?.position === 'left' && icon.icon}
      {label}
      {icon?.position === 'right' && icon.icon}
    </button>
  );
};

export default Button;
