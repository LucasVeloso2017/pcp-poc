import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/Button';
import StatusCard from '@/components/StatusCard';
import Image from 'next/image';
import {
  PiArrowDown,
  PiCaretDown,
  PiCaretRight,
  PiCheckCircle,
  PiEye,
  PiHouse,
  PiMapPin,
  PiShieldCheck,
  PiUsers,
} from 'react-icons/pi';

export default function Page() {
  return (
    <div className='w-100% h-full flex items-start justify-around flex-col py-2 gap-10'>
      <div className='flex flex-row gap-2 items-center'>
        <Breadcrumb width={'48px'} height={'48px'}>
          <PiHouse />
        </Breadcrumb>
        <Breadcrumb width={'91px'} height={'48px'}>
          Processos
        </Breadcrumb>
      </div>
      <div>filtro</div>
      <div className='flex flex-col gap-2 items-center'>
        <h1 className='font-dm-sans font-[600] text-[36px] self-start'>
          Compras Públicas
        </h1>
        <p className='font-inter font-[400] self-start regular text-[16px] text-[#717171]'>
          Utilize a busca e filtros para localizar processos do seu interesse
        </p>
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

      <div className='w-full flex gap-4'>
        <div className='min-w-[100px] flex flex-col gap-2'>
          <p className='font-inter font-normal text-[#717171] self-start'>
            Status
          </p>
          <div className='bg-[#FFFFFF] border py-2 px-4 rounded-2xl border-[#D1EFF3] flex flex-row items-center gap-2'>
            <p className='pl-4 pr-[46px] py-[18px] font-inter font-normal text-[16px] leading-[140%] text-[#ABABAB]'>
              Selecione
            </p>
            <button
              aria-label='Seleção de Status'
              className='cursor-pointer py-3.5 pl-[245px] pr-4'
            >
              <PiCaretDown className='text-[#ABABAB]' />
            </button>
          </div>
        </div>
        <div className='min-w-[100px] flex flex-col gap-2'>
          <p className='font-inter font-normal text-[#717171] self-start'>
            Grupo Material
          </p>
          <div className='bg-[#FFFFFF] border py-2 px-4 rounded-2xl border-[#D1EFF3] flex flex-row items-center'>
            <p className='pl-4 pr-[46px] py-[18px] font-inter font-normal text-[16px] leading-[140%] text-[#ABABAB]'>
              Selecione
            </p>
            <button
              aria-label='Seleção de Status'
              className='cursor-pointer py-3.5 pl-[245px] pr-4'
            >
              <PiCaretDown className='text-[#ABABAB]' />
            </button>
          </div>
        </div>
        <div className='min-w-[100px] flex flex-col gap-2'>
          <p className='font-inter font-normal text-[#717171] self-start'>
            Classe Material
          </p>
          <div className='bg-[#FFFFFF] border py-2 px-4 rounded-2xl border-[#D1EFF3] flex flex-row items-center'>
            <p className='pl-4 pr-[46px] py-[18px] font-inter font-normal text-[16px] leading-[140%] text-[#ABABAB]'>
              Selecione
            </p>
            <button
              aria-label='Seleção de Status'
              className='cursor-pointer py-3.5 pl-[245px] pr-4'
            >
              <PiCaretDown className='text-[#ABABAB]' />
            </button>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((item, index) => (
          <div
            key={`${index}`}
            className='w-full min-h-[926px] p-8 border rounded-[20px] bg-[#FFFFFF] border-[#E8E8EA] shadow-[0px 4px 4px 0px #080F3414] flex flex-col'
          >
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
                  <StatusCard status='cancelada' />

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
                <span className='font-inter font-bold text-[16px] text-[#081E2D]'>
                  150 itens
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
            />
          </div>
        ))}
      </div>

      <div className='flex flex-row justify-center items-center self-center gap-4 py-[40px]'>
        {[
          { index: 1, isActive: true },
          { index: 2, isActive: false },
          { index: 3, isActive: false },
          { index: 4, isActive: false },
          { index: 5, isActive: false },
        ].map((item, index) => (
          <button
            key={index}
            aria-label='Acesso à página'
            className={`
        cursor-pointer 
        rounded-[8px] 
        shadow-[0px_3px_6px_0px_#3333331A]
        font-dm-sans font-medium text-[20px] leading-[120%]
        ${
          item.isActive
            ? 'bg-[#0085AC] text-white py-[17px] px-[20.5px]'
            : 'bg-[#3333331A] text-[#717171] py-[17px] px-[18px]'
        }
      `}
          >
            {item.index}
          </button>
        ))}

        <button
          className='cursor-pointer bg-[#3333331A] text-[#717171] rounded-[8px] p-3 shadow-[0px_3px_6px_0px_#3333331A]'
          aria-label='Próxima página'
        >
          <PiCaretRight className='text-[#ABABAB]' />
        </button>
      </div>
    </div>
  );
}
