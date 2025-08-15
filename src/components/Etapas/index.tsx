import Image from 'next/image';
import { ReactNode } from 'react';

interface Props {
  icone: ReactNode;
  titulo: string;
  descricao: string;
}

interface Etapa {
  usaIndex: boolean;
  etapas: Props[];
  usaBackground: boolean;
}

function Etapas(props: Etapa) {
  const { usaIndex, etapas, usaBackground } = props;

  const gridClasses = `
    grid w-full gap-6 grid-cols-1 mt-[34px] relative z-10
    md:grid-cols-2 
    lg:grid-cols-3
    ${usaBackground ? 
      `before:content-[''] before:absolute before:-z-10 before:top-1/2 before:left-1/2 
       before:-translate-x-1/2 before:-translate-y-1/2 before:w-4/5 before:h-0.5
       before:bg-[linear-gradient(90deg,rgba(26,176,195,0)_0%,#1AB0C3_15%,#1AB0C3_85%,rgba(26,176,195,0)_100%)]` 
      : ''
    }
  `.trim();

  return (
    <div className={gridClasses}>
      {etapas.map((etapa, index) => (
        <div
          key={`${etapa.titulo}-${index}`}
          className={`
            relative w-full h-full rounded-2xl pt-[60px] pr-[33px] pb-[30px] pl-[33px] 
            gap-4 top-[19.4px] flex justify-center items-center flex-col
            ${usaBackground ? 
              'bg-white shadow-md border-t border-gray-200' 
              : ''
            }
          `.trim()}
        >
          {usaIndex && usaBackground && (
            <div className="absolute -top-[34px] left-1/2 -translate-x-1/2 w-[68px] h-[68px] bg-[#F7A622] rounded-full shadow-lg flex justify-center items-center">
              <p className="text-white font-bold text-4xl leading-none">
                {index + 1}
              </p>
            </div>
          )}
          {etapa.icone}
          <h1 className="font-['DM_Sans',sans-serif] font-bold text-2xl text-center text-[#111827] items-center min-h-[56px] flex">
            {etapa.titulo}
          </h1>
          <p className="font-['DM_Sans',sans-serif] font-normal text-[13.23px] text-center text-[#6B7280] flex-grow">
            {etapa.descricao}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Etapas;