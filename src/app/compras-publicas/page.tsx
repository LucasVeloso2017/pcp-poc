import AdvancedFilters from "@/components/AdvancedFilters";
import BuyCard from "@/components/BuyCard";
import { Pagination } from "@/components/Pagination";
import { PiCaretDown, PiShieldCheck } from "react-icons/pi";

export default function Page() {
  return (
    <div className="w-full flex justify-center py-15">
      <div className="w-[80%] flex flex-col gap-10">
        <div className='flex flex-col gap-2 items-center'>
          <h1 className='font-dm-sans font-[600] text-[36px] self-start'>
            Compras Públicas
          </h1>
          <p className='font-inter font-[400] self-start regular text-[16px] text-[#717171]'>
            Utilize a busca e filtros para localizar processos do seu interesse
          </p>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-[920px]">
            <AdvancedFilters />
          </div>
        </div>
        <div className='w-full bg-[#0BBC891A] border border-solid border-[#006A4C] rounded-[20px] p-6 flex flex-col justify-start gap-4'>
          <div className='flex flex-row gap-2 items-center justify-start'>
            <PiShieldCheck className='text-[#006A4C] w-6 h-6' />
            <p className='font-dm-sans font-semibold text-[18px] leading-[120%] text-[#006A4C]'>
              Protegido por Blockchain Licitachain
            </p>
          </div>
          <p className='font-dm-sans font-normal text-[16px] leading-[120%] text-[#006A4C]'>
            Todas as compras possuem hash única e são imutáveis.
          </p>
        </div>
        <div className='w-full flex flex-col gap-6'>
          <p className='font-dm-sans font-semibold text-[36px] leading-[120%] text-[#333333]'>
            Compras realizadas
          </p>
          <p className='font-inter font-normal italic text-[12px] leading-[120%] text-[#717171]'>
            244125 registros
          </p>
        </div>

        <div className='w-full flex items-center justify-start '>
          <div className="w-[875px] flex gap-4">
            <div className='flex flex-col gap-2 w-[281px]'>
              <p className='font-inter font-normal text-[#717171] self-start'>
                Status
              </p>
              <div className='bg-[#FFFFFF] px-4 py-2 border rounded-2xl border-[#D1EFF3] flex flex-row items-center justify-between'>
                <p className='font-inter font-normal text-[16px] leading-[140%] text-[#ABABAB]'>
                  Selecione
                </p>
                <button
                  aria-label='Seleção de Status'
                  className='cursor-pointer'
                >
                  <PiCaretDown className='text-[#ABABAB]' />
                </button>
              </div>
            </div>
            <div className='flex flex-col gap-2 w-[281px]'>
              <p className='font-inter font-normal text-[#717171] self-start'>
                Grupo Material
              </p>
              <div className='bg-[#FFFFFF] px-4 py-2 border rounded-2xl border-[#D1EFF3] flex flex-row items-center justify-between'>
                <p className='font-inter font-normal text-[16px] leading-[140%] text-[#ABABAB]'>
                  Selecione
                </p>
                <button
                  aria-label='Seleção de Status'
                  className='cursor-pointer'
                >
                  <PiCaretDown className='text-[#ABABAB]' />
                </button>
              </div>
            </div>
            <div className='flex flex-col gap-2 w-[281px]'>
              <p className='font-inter font-normal text-[#717171] self-start'>
                Classe Material
              </p>
              <div className='bg-[#FFFFFF] px-4 py-2 border rounded-2xl border-[#D1EFF3] flex flex-row items-center justify-between'>
                <p className='font-inter font-normal text-[16px] leading-[140%] text-[#ABABAB]'>
                  Selecione
                </p>
                <button
                  aria-label='Seleção de Status'
                  className='cursor-pointer'
                >
                  <PiCaretDown className='text-[#ABABAB]' />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {[1,2,3,4,5,6].map(item =>(
            <BuyCard key={item} />
          ))}
        </div>
        <Pagination />
      </div>
    </div>
  );
}
