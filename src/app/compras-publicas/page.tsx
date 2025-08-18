'use client';
import AdvancedFilters from '@/components/AdvancedFilters';
import BuyCard from '@/components/BuyCard';
import { Pagination } from '@/components/Pagination';
import { useAllMunicipios } from '@/hooks/useAllMunicipios';
import { useComprasRealizadas } from '@/hooks/useComprasRealizadas';
import { useMunicipios } from '@/hooks/useMunicipios';
import { useUFs } from '@/hooks/useUFs';
import { Filtro } from '@/types/filtro';
import { PagedRequest } from '@/types/pagedRequest';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PiCaretDown, PiShieldCheck } from 'react-icons/pi';

export default function Page() {
  const searchParams = useSearchParams();
  const [params, setParams] = useState<PagedRequest>({
    page: 1,
    pageSize: 6,
    sortDirection: 'desc',
    sortBy: 'DataCompra',
  });
  const [filtros, setFiltros] = useState<Filtro>({
    produto: '',
    numero: '',
    comprador: '',
    uf: '',
    municipio: '',
  });

  useEffect(() => {
    const produto = searchParams.get('produto') || '';
    const numero = searchParams.get('numero') || '';
    const comprador = searchParams.get('comprador') || '';
    const uf = searchParams.get('uf') || '';
    const municipio = searchParams.get('municipio') || '';

    setFiltros({
      produto,
      numero,
      comprador,
      uf,
      municipio,
    });

    console.log('Parâmetros recebidos:', {
      produto,
      numero,
      comprador,
      uf,
      municipio,
    });
  }, [searchParams]);

  const { compras, error, isLoading } = useComprasRealizadas(params);
  const { municipios, errorAllMunicipios, isLoadingAllMunicipios } =
    useAllMunicipios();
  const { ufs, errorUFs, isLoadingUFs } = useUFs();
  const handlePageChange = (newPage: number) => {
    setParams((currentParams) => ({ ...currentParams, page: newPage }));
  };

  const handleFilterChange = (params: Filtro) => {
    setFiltros(params);
  }

  return (
    <div className='w-full flex justify-center py-15'>
      <div className='w-[80%] flex flex-col gap-10'>
        <div className='flex flex-col gap-2 items-center'>
          <h1 className='font-dm-sans font-[600] text-[36px] self-start'>
            Compras Públicas
          </h1>
          <p className='font-inter font-[400] self-start regular text-[16px] text-[#717171]'>
            Utilize a busca e filtros para localizar processos do seu interesse
          </p>
        </div>
        <div className='w-full flex items-center justify-center'>
          <div className='w-[920px]'>
            <AdvancedFilters
              params={filtros}
              setFilter={(params) => handleFilterChange(params)}
              ufs={{ ufs, errorUFs, isLoadingUFs }}
              municipios={{
                municipios,
                errorAllMunicipios,
                isLoadingAllMunicipios,
              }}
            />
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
          <div className='w-[875px] flex gap-4'>
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
          {compras &&
            compras.map((item, index) => (
              <BuyCard compra={item} key={`${item.id}-${index}`} />
            ))}
        </div>
        <Pagination
          currentPage={params.page || 1}
          // Supondo que sua API retorne o total de páginas
          // totalPages={compras?.totalPages || 1}
          totalPages={10}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
