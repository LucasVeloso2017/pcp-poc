import React from 'react';
import { PiCaretDown, PiMagnifyingGlass } from 'react-icons/pi';
import Button from '../Button';

const AdvancedFilters = () => {
  return(
   <div 
   className='w-full h-[72px] px-8 bg-white border flex justify-center items-center border-[#D4D4D4] rounded-[40px] overflow-hidden'
   style={{ boxShadow: '0px 4px 6px 0px #0000000F' }}
   >
      <div className='w-[70%] h-full flex items-center justify-around '>
         <div className='flex items-center justify-center '>
            <div className='w-full flex flex-col items-start justify-center'>
               <label className='font-inter font-bold text-[12px] leading-[26px] text-[#333333]'>Produto:</label>
               <input className='text-[12px] placeholder:text-[##D4D4D4]' type="text" placeholder='Termo ou palavra-passe'/>
            </div>
         </div>
         <div className='flex items-center justify-center'>
            <div className='w-full flex flex-col items-start justify-center'>
               <label className='font-inter font-bold text-[12px] leading-[26px] text-[#333333]'>Número da Compra:</label>
               <input className='font-inter text-[12px] placeholder:text-[##D4D4D4]' type="text" placeholder='Número do processo'/>
            </div>
         </div>
         <div className='flex items-center justify-center'>
            <div className='w-full flex flex-col items-start justify-center'>
               <label className='font-inter font-bold text-[12px] leading-[26px] text-[#333333]'>Comprador:</label>
               <input className='font-inter text-[12px] placeholder:text-[##D4D4D4]' type="text" placeholder='Nome do comprador'/>
            </div>
         </div>
      </div>
      <div className='flex-1 flex items-center justify-between gap-2'>
         <div className='w-[214px] h-[56px] rounded-[26px] border border-[#D4D4D4] flex items-center justify-center'>
            <div className='w-1/2 border-r border-[#D9D9D9] flex justify-center items-center gap-1'>
               <span className='font-inter font-bold text-[12px] text-[#717171]'>
                  UF
               </span>
               <PiCaretDown className="w-3 h-3 text-[#717171]"/>
            </div>
            <div className='w-1/2 flex justify-center items-center gap-1'>
               <span className='font-inter font-bold text-[12px] text-[#717171]'>
                  Município
               </span>
               <PiCaretDown className="w-3 h-3 text-[#717171]"/>
            </div>
         </div>
         <Button
            className='w-12 h-12'
            label=''
            variant='yellow'
            icon={{
               icon:<PiMagnifyingGlass/>,
               position:'left'
            }}
         />
      </div>
   </div>
  );
}

export default AdvancedFilters;