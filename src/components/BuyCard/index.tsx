import React from 'react';
import { PiCheck, PiCheckCircle, PiEye, PiMapPin, PiShieldCheck, PiUsers } from 'react-icons/pi';
import Button from '../Button';
// import { Container } from './styles';

const BuyCard = () => {
   return (
      <div className='w-full min-h-[926px] p-8 border rounded-[20px] bg-[#FFFFFF] border-[#E8E8EA] shadow-[0px 4px 4px 0px #080F3414] flex flex-col'>
         
         <div className='flex flex-col gap-6 py-2 '>
            <div className='flex flex-row gap-2'>
               <p className='text-nowrap w-[125px] h-[12px] font-inter font-bold text-[16px] text-[#333333]'>
                  N° do Processo:
               </p>
               <p className='w-[76px] h-[12px] font-inter font-[400] text-[16px] text-[#333333]'>
                  030/2023
               </p>
            </div>
            <div className='flex flex-col gap-6 '>
               <div className='w-[200px] p-3 flex justify-center items-center gap-2 rounded-[4px] bg-[#DAFFED] '>
                  <PiCheckCircle className='text-[#039B6C] w-5 h-5' />
                  <p className='font-dm-sans font-medium text-[16px] text-[#039B6C] leading-[120%]'>
                    Analise
                  </p>
               </div>

               <h1 className='font-dm-sans font-semibold text-[24px] leading-[120%] text-[#081E2D]'>
                  Aquisição de equipamentos de informática para laboratórios de
                  ensino
               </h1>

               <div className='gap-3 flex flex-col'>
                  <h1 className='font-dm-sans font-[400] text-[20px] leading-[120%] text-[#081E2D]'>
                     Ministério da Educação
                  </h1>
                  <p className='font-inter font-[400] text-[16px] leading-[140%] text-[#333333]'>
                     Sesu/MEC
                  </p>
               </div>
               <div className='gap-3 flex flex-row items-center justify-between'>
                  <div className='flex justify-center items-center gap-3'>
                     <PiMapPin className='text-[#666666] w-6 h-6' />
                     <p className='font-inter font-[400] text-[16px] leading-[140%] text-[#666666]'>
                        Brasília/DF
                     </p>
                  </div>
                  <div className='gap-1 rounded-4xl border py-1 px-4 bg-[#278AFF1A] border-[#278AFF] flex items-center content-center'>
                     <p className='font-inter font-bold text-[12px] leading-[100%] text-[#181A1F] content-center self-center'>
                        Federal
                     </p>
                  </div>
               </div>

               <p className='font-inter font-normal text-[16px] text-[#333333]'>
                  Equipamentos de Processamentos de Dados Equipamentos de
                  Informática
               </p>
            </div>
            <div className='gap-4 py-4 border-t border-t-[#B1CED1]'>
               <div className='flex flex-col gap-4'>
                  <div className='flex flex-row justify-between'>
                     <p className='font-inter font-[700] text-[20px] leading-[140%] text-[#333333]'>
                        Valor:
                     </p>
                     <p className='font-inter font-bold text-[20px] leading-[140%] text-[#039B6C]'>
                        R$ 2.850.000,00
                     </p>
                  </div>
                  <div className='w-full h-[15px] flex flex-row justify-between'>
                     <p className='font-inter font-bold text-[20px] leading-[140%] text-[#333333]'>
                        Compra:
                     </p>
                     <p className='font-inter font-normal text-[16px] leading-[140%] text-[#333333]'>
                        29/01/2024
                     </p>
                  </div>
                  <div className='w-full h-[15px] flex flex-row justify-between'>
                     <p className='font-inter font-bold text-[20px] leading-[140%] text-[#333333]'>
                        Entrega:
                     </p>
                     <p className='font-inter font-normal text-[16px] leading-[140%] text-[#333333]'>
                        29/03/2024
                     </p>
                  </div>
               </div>
            </div>
         </div>

         <div className='flex flex-col justify-start'>
            <div className='flex items-center justify-start gap-1'>
               <PiCheckCircle className='text-[#039B6C] w-5 h-5' />
               <span className='font-inter font-bold text-[16px] text-[#081E2D]'>150 itens</span>
            </div>
            <span className='font-inter font-normal text-[16px] text-[#333333]'>Todos os itens entregues</span>
         </div>

         <div className='pt-6 border-t border-t-[#B1CED1] flex flex-col'>
            <div className='w-full gap-[12px] flex flex-row'>
               <PiUsers className='w-6 h-6 text-[#666666]' />
               <p className='font-inter font-[400] text-[16px] leading-[140%] text-[#666666]'>
                  Fornecedor:
               </p>
            </div>
            <p className='text-nowrap mt-3 font-inter font-normal text-[16px] leading-[140%] text-[#333333]'>
               TechCorp Solutions LTDA
            </p>
            <p className='text-nowrap mt-3 font-inter font-normal text-[16px] leading-[140%] text-[#333333]'>
               TechCorp Solutions LTDA
            </p>
            <p className='text-nowrap mt-3 font-inter font-normal text-[16px] leading-[140%] text-[#333333]'>
               +2 fornecedores
            </p>
         </div>

         <div className='gap-1 flex justify-center my-6'>
            <PiShieldCheck className='w-6 h-6 text-[#039B6C]'/>
            <p className='font-inter font-bold text-[20px] leading-[140%] text-[#039B6C]'>
               Protegido por Licitachain
            </p>
         </div>

         <Button icon={{
            icon: <PiEye />,
            position: 'left'
         }} label={'Ver Detalhes'} variant={'yellow'} />
      </div>
   );
}

export default BuyCard;