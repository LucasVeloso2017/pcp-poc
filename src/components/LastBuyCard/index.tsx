import Image from 'next/image';
import { PiArrowSquareOut } from 'react-icons/pi';

interface Props {
  processo: string;
  data: string;
  orgao: string;
  descricao: string;
  valorTotal: string;
  status: string;
}

function LastBuyCard({ processo, data, orgao, descricao, valorTotal, status }: Props) {
  return (
    <div className="w-full flex flex-col gap-3 p-6 px-[17px] bg-white rounded-xl border border-[#E5E7EB] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-between font-['DM_Sans',sans-serif] font-bold text-base text-[#1AB0C3]">
        Processo {processo}{' '}
        <p
          className="flex h-7 rounded-full py-1.5 px-2.5 text-center justify-center items-center font-['DM_Sans',sans-serif] font-bold text-xs leading-none"
          style={{
            backgroundColor:
              status?.trim().toLowerCase() === 'em andamento'
                ? '#D1EFF3'
                : '#DAFFED',
            color:
              status?.trim().toLowerCase() === 'em andamento'
                ? '#2798B9'
                : status?.trim().toLowerCase() === 'concluído'
                ? '#11A174'
                : '#991B1B',
          }}
        >
          {status}
        </p>
      </div>
      
      <div className="font-['DM_Sans',sans-serif] font-normal text-xs leading-none text-[#6B7280]">
        {data}
      </div>
      
      <div className="flex flex-col gap-2 text-sm text-[#6B7280]">
        Órgão 
        <p className="font-['DM_Sans',sans-serif] font-medium text-sm leading-none text-[#111827]">
          {orgao}
        </p>
      </div>
      
      <div className="flex flex-col gap-2 text-[#6B7280]">
        Descrição 
        <p className="font-['DM_Sans',sans-serif] font-normal text-xs leading-none text-[#111827] w-[90%] h-full">
          {descricao}
        </p>
      </div>
      
      <div className="flex flex-col gap-3 mt-auto">
        <div className="w-full h-px bg-[#E0E0E0] border-none"></div>
        <div className="flex justify-between items-center font-['DM_Sans',sans-serif] font-normal text-xs leading-none">
          <div>
            Valor Total 
            <p className="mt-2 font-['DM_Sans',sans-serif] font-bold text-lg leading-none text-[#1AB0C3]">
              {valorTotal}
            </p>
          </div>
          <PiArrowSquareOut className="w-5 h-5 text-[#9CA3AF]"/>
        </div>
      </div>
    </div>
  );
}

export default LastBuyCard;