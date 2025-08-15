import React from 'react';

// import { Container } from './styles';

const Filter: React.FC = () => {
   return (
      <div className="w-4/5 h-[72px] gap-2 mt-[4%] mx-auto">
         <div className="flex items-center w-[940px] h-[72px] border bg-[#FBFBFB] border-[#D4D4D4] shadow-[0px_4px_6px_0px_#0000000F] pr-2 rounded-[40px]">
            <div className="relative flex items-center h-[72px] gap-2.5 whitespace-nowrap pl-6 py-9">
               <div>
                  <label className="font-['Inter'] font-bold text-xs tracking-normal align-middle text-[#333333]">Item:</label>
                  <input
                     className="flex flex-col bg-transparent text-sm w-full border-none focus:outline-none font-['Inter'] placeholder:text-neutral-400 placeholder:font-medium"
                     placeholder='Termo ou palavra-passe'
                  ></input>
               </div>
            </div>
            <div className="relative flex items-center h-[72px] gap-2.5 whitespace-nowrap pl-6 py-9">
               <div>
                  <label className="font-['Inter'] font-bold text-xs tracking-normal align-middle text-[#333333]">Número da Compra:</label>
                  <input
                     className="flex flex-col bg-transparent text-sm w-full border-none focus:outline-none font-['Inter'] placeholder:text-neutral-400 placeholder:font-medium"
                     placeholder='Número do processo'
                  ></input>
               </div>
            </div>
            <div className="relative flex items-center h-[72px] gap-2.5 whitespace-nowrap pl-6 py-9">
               <div>
                  <label className="font-['Inter'] font-bold text-xs tracking-normal align-middle text-[#333333]">Comprador:</label>
                  <input
                     className="flex flex-col bg-transparent text-sm w-full border-none focus:outline-none font-['Inter'] placeholder:text-neutral-400 placeholder:font-medium"
                     placeholder='Nome do comprador'
                  ></input>
               </div>
            </div>
            <div className="relative flex items-center h-[72px] gap-2.5 whitespace-nowrap pl-6 py-9">
               <div className="flex items-center h-14 border border-neutral-300 bg-white flex-1 min-w-[200px] rounded-[28px]">
                  <div
                     className={`$"relative flex items-center flex-1 h-full" $"border-r border-r-neutral-300"`}
                  >
                     <select className="appearance-none w-full text-[#717171] font-bold text-[12px] tracking-normal leading-[1.2] text-center align-middle pr-[20%] font-['Inter']" defaultValue=''>
                        <option value='' disabled>
                           UF
                        </option>
                        <option value='SP'>SP</option>
                        <option value='RJ'>RJ</option>
                        <option value='MG'>MG</option>
                     </select>
                     <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none w-5 h-5 bg-[url('/icon/arrowDown.png')] bg-no-repeat bg-center"></div>
                  </div>

                  <div className="relative flex items-center flex-1 h-full">
                     <select className="appearance-none w-full text-[#717171] font-bold text-[12px] tracking-normal leading-[1.2] text-center align-middle pr-[20%] font-['Inter']" defaultValue=''>
                        <option value='' disabled>
                           Município
                        </option>
                        <option value='sao_paulo'>São Paulo</option>
                        <option value='rio_de_janeiro'>Rio de Janeiro</option>
                     </select>
                     <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none w-5 h-5 bg-[url('/icon/arrowDown.png')] bg-no-repeat bg-center"></div>
                  </div>
               </div>
            </div>
            <div className="w-[56px] h-[48px] gap-[8px] pl-2">
               {/* <button
                  type='button'
                  className={styles.button}
                  aria-label='Pesquisar'
               >
                  <Image
                     src='/icon/Pesquisar.png'
                     alt='Ícone de Pesquisa'
                     width={48}
                     height={48}
                  />
               </button> */}
            </div>
         </div>
      </div>
   );
}

export default Filter;