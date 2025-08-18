import React from 'react';
import {
  PiCheckCircle,
  PiEye,
  PiMapPin,
  PiShieldCheck,
  PiUsers,
} from 'react-icons/pi';
import Button from '../Button';
import { ComprasRealizadas } from '@/types/comprasRealizadas';
import { format } from 'date-fns';
import { useRouter } from 'next/router';

interface BuyCardProps {
  compra: ComprasRealizadas;
}
const BuyCard = ({ compra }: BuyCardProps) => {
  const handleDetails = () => {
    const router = useRouter();
    router.push('/');
  };
  return (
    <div className='w-full min-h-[926px] p-8 border rounded-[20px] bg-[#FFFFFF] border-[#E8E8EA] shadow-[0px 4px 4px 0px #080F3414] flex flex-col'>
      <div className='flex flex-col gap-6 py-2 '>
        <div className='flex flex-row gap-2'>
          <p className='text-nowrap w-[125px] h-[12px] font-inter font-bold text-[16px] text-[#333333]'>
            N° do Processo:
          </p>
          <p className='w-full h-[12px] font-inter font-[400] text-[16px] text-[#333333]'>
            {compra?.processo ?? 'Não informado'}
          </p>
        </div>
        <div className='flex flex-col gap-6 '>
          <div className='w-[200px] p-3 flex justify-center items-center gap-2 rounded-[4px] bg-[#DAFFED] '>
            <PiCheckCircle className='text-[#039B6C] w-5 h-5' />
            <p className='font-dm-sans font-medium text-[16px] text-[#039B6C] leading-[120%]'>
              {compra?.statusDescricao ?? 'Indefinido'}
            </p>
          </div>

          <h1 className='font-dm-sans font-semibold text-[24px] leading-[120%] text-[#081E2D]'>
            {compra?.descricao ?? 'Não informado'}
          </h1>

          <div className='gap-3 flex flex-col'>
            <h1 className='font-dm-sans font-[400] text-[20px] leading-[120%] text-[#081E2D]'>
              {compra?.orgao ?? 'Não informado'}
            </h1>
            <p className='font-inter font-[400] text-[16px] leading-[140%] text-[#333333]'>
              {compra?.uasg ?? 'Não informado'}
            </p>
          </div>
          <div className='gap-3 flex flex-row items-center justify-between'>
            <div className='flex justify-center items-center gap-3'>
              <PiMapPin className='text-[#666666] w-6 h-6' />
              <p className='font-inter font-[400] text-[16px] leading-[140%] text-[#666666]'>
                {compra?.localizacao ?? 'Não informado'}
              </p>
            </div>
            <div className='gap-1 rounded-4xl border py-1 px-4 bg-[#278AFF1A] border-[#278AFF] flex items-center content-center'>
              <p className='font-inter font-bold text-[12px] leading-[100%] text-[#181A1F] content-center self-center'>
                Federal
              </p>
            </div>
          </div>

          <p className='font-inter font-normal text-[16px] text-[#333333]'>
            {compra?.grupoMaterial ?? 'Não informado'}
          </p>
        </div>
        <div className='gap-4 py-4 border-t border-t-[#B1CED1]'>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-row justify-between'>
              <p className='font-inter font-[700] text-[20px] leading-[140%] text-[#333333]'>
                Valor:
              </p>
              <p className='font-inter font-bold text-[20px] leading-[140%] text-[#039B6C]'>
                R$ {compra?.valor ?? 'Não informado'}
              </p>
            </div>
            <div className='w-full h-[15px] flex flex-row justify-between'>
              <p className='font-inter font-bold text-[20px] leading-[140%] text-[#333333]'>
                Compra:
              </p>
              <p className='font-inter font-normal text-[16px] leading-[140%] text-[#333333]'>
                {compra?.dataCompra
                  ? format(new Date(compra.dataCompra), 'dd/MM/yyyy')
                  : 'Não informado'}
              </p>
            </div>
            <div className='w-full h-[15px] flex flex-row justify-between'>
              <p className='font-inter font-bold text-[20px] leading-[140%] text-[#333333]'>
                Entrega:
              </p>
              <p className='font-inter font-normal text-[16px] leading-[140%] text-[#333333]'>
                {compra?.dataEntrega
                  ? format(new Date(compra.dataEntrega), 'dd/MM/yyyy')
                  : 'Não informado'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-start'>
        <div className='flex items-center justify-start gap-1'>
          <PiCheckCircle className='text-[#039B6C] w-5 h-5' />
          <span className='font-inter font-bold text-[16px] text-[#081E2D]'>
            {compra?.totalItens ?? 'Quantidade não informada de '} itens
          </span>
        </div>
        <span className='font-inter font-normal text-[16px] text-[#333333]'>
          Todos os itens entregues
        </span>
      </div>

      <div className='pt-6 border-t border-t-[#B1CED1] flex flex-col'>
        <div className='w-full gap-[12px] flex flex-row'>
          <PiUsers className='w-6 h-6 text-[#666666]' />
          <p className='font-inter font-[400] text-[16px] leading-[140%] text-[#666666]'>
            Fornecedor:
          </p>
        </div>
        <>
          {compra?.fornecedores?.map((item, index) => (
            <>
              {index < 2 ? (
                <p className='text-nowrap mt-3 font-inter font-normal text-[16px] leading-[140%] text-[#333333]'>
                  {item.empresa}
                </p>
              ) : (
                <p className='text-nowrap mt-3 font-inter font-normal text-[16px] leading-[140%] text-[#333333]'>
                  +{compra?.fornecedores?.length - 2} fornecedores
                </p>
              )}
            </>
          ))}
        </>
      </div>

      <div className='gap-1 flex justify-center my-6'>
        <PiShieldCheck className='w-6 h-6 text-[#039B6C]' />
        <p className='font-inter font-bold text-[20px] leading-[140%] text-[#039B6C]'>
          Protegido por Licitachain
        </p>
      </div>

      <Button
        icon={{
          icon: <PiEye />,
          position: 'left',
        }}
        label={'Ver Detalhes'}
        variant={'yellow'}
        onClick={handleDetails}
      ></Button>
    </div>
  );
};

export default BuyCard;
