import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  onClick?: () => void;
  label:string
  icon?:{
   position:'left' | 'right'
   icon:React.ReactNode
  }
  variant: 'blue' | 'yellow' | 'outlined-blue' | 'outlined-neutral'
  className?:string
}

const Button: React.FC<Props> = ({ onClick, label, variant, icon,className }) => {

   const isBlue = variant === 'blue'
   const isYellow = variant === 'yellow'
   const isOutlinedBlue = variant === 'outlined-blue'
   const isOutlinedNeutral = variant === 'outlined-neutral'

  return (
    <button
      onClick={onClick}
      className={twMerge(
         'h-12 rounded-3xl flex flex-row items-center justify-center font-dm-sans font-bold text-[16px] bg-white cursor-pointer',
         isBlue && 'bg-app-brand-primary-200 text-white font-bold gap-2 uppercase',
         isYellow && 'bg-app-brand-secondary-100 text-app-neutral-900 font-bold gap-2 uppercase',
         isOutlinedBlue && 'bg-white border border-[#1AB0C3] text-[#1AB0C3] text-[12px] font-bold gap-2 rounded-xl px-5',
         isOutlinedNeutral && 'bg-white border border-[#E5E7EB] text-[#374151] text-[12px] font-bold gap-2 rounded-xl px-5',
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
