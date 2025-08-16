import React from 'react';
import { PiHouse } from 'react-icons/pi';

interface Props {
  width: string;
  height: string;
  className?: string;
  children?: React.ReactNode;
}

function Breadcrumb(props: Props) {
  const { width, height, className, children } = props;

  return (
    <div
      className={`flex justify-center items-center w-[${width}]
     h-[${height}] ${className || ''} bg-[#d1eff3]
     rounded-[12px] p-[12px] cursor-pointer hover:opacity-80 color text-[#0085AC] 
     font-inter font-[400] regular text-[12px]
     `}
    >
      {children}
    </div>
  );
}

export default Breadcrumb;
