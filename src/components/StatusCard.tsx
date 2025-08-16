import React from 'react';
import { PiCheckCircle, PiX } from 'react-icons/pi';

interface Props {
  status: string;
}

function StatusCard({ status }: Props) {
  return (
    <>
      <div
        className={`w-[180px] p-3 flex justify-center items-center gap-2 rounded-[4px]  ${
          status.trim().toLowerCase() == 'finalizada'
            ? 'bg-[#DAFFED]'
            : status.trim().toLowerCase() == 'em andamento'
              ? 'bg-[#DAFFED]'
              : 'bg-[#FFD4EF]'
        } `}
      >
        {status.trim().toLowerCase() == 'finalizada' ? (
          <PiCheckCircle className='text-[#039B6C] w-5 h-5' />
        ) : status.trim().toLowerCase() == 'em andamento' ? (
          <PiCheckCircle className='text-[#039B6C] w-5 h-5' />
        ) : (
          <PiX className='text-[#DF3F46] w-5 h-5' />
        )}

        <p
          className={`pr-3 font-dm-sans font-medium text-[16px]  ${status.trim().toLowerCase() == 'finalizada' ? 'text-[#039B6C]' : status == 'em andamento' ? 'text-[#039B6C]' : 'text-[#DF3F46]'} leading-[120%]`}
        >
          {status.trim().toLowerCase() == 'finalizada'
            ? 'Finalizada'
            : status.trim().toLowerCase() == 'em andamento'
              ? 'Em andamento'
              : 'Cancelada'}
        </p>
      </div>
    </>
  );
}

export default StatusCard;
