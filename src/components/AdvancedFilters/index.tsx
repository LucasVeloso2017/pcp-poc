'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { PiMagnifyingGlass } from 'react-icons/pi';
import Button from '../Button';
import DropdownLocalization from '../DropdownLocalization';
import { useMunicipios } from '@/hooks/useMunicipios';
import { useRouter } from 'next/navigation';
import { Filtro } from '@/types/filtro';

interface UFsProps {
  ufs: string[];
  errorUF: any;
  isLoadingUF: boolean;
}

interface MunicipiosProps {
  municipios: string[];
  errorMunicipio: any;
  isLoadingMunicipio: boolean;
}

interface AdvancedFiltersProps {
  params: Filtro;
  ufs: UFsProps;
  municipios: MunicipiosProps;
  redirect: boolean;
  setFilter: any;
}

const AdvancedFilters = ({
  params,
  ufs,
  municipios: allMunicipios,
  redirect,
  setFilter
}: AdvancedFiltersProps) => {
  const router = useRouter();
  const [produto, setProduto] = useState(params?.produto ?? '');
  const [numeroCompra, setNumeroCompra] = useState(params?.numero ?? '');
  const [comprador, setComprador] = useState(params?.comprador ?? '');

  const [selectedUF, setSelectedUF] = useState(params?.uf ?? '');
  const [selectedMunicipio, setSelectedMunicipio] = useState(
    params?.municipio ?? ''
  );

  useEffect(() => {
    if (params) {
      setProduto(params.produto);
      setNumeroCompra(params.numero);
      setComprador(params.comprador);
      setSelectedUF(params.uf);
      setSelectedMunicipio(params.municipio);
      setFilter(params)
    }
  }, [params]);

  const {
    municipios: municipiosByUF,
    errorMunicipio: errorMunicipioByUF,
    isLoadingMunicipio: isLoadingMunicipioByUF,
  } = useMunicipios(selectedUF);

  const municipiosData = useMemo(() => {
    if (selectedUF) {
      return {
        municipios: municipiosByUF || [],
        errorMunicipio: errorMunicipioByUF,
        isLoadingMunicipio: isLoadingMunicipioByUF,
      };
    } else {
      return {
        municipios: allMunicipios.municipios || [],
        errorMunicipio: allMunicipios.errorMunicipio,
        isLoadingMunicipio: allMunicipios.isLoadingMunicipio,
      };
    }
  }, [
    selectedUF,
    municipiosByUF,
    errorMunicipioByUF,
    isLoadingMunicipioByUF,
    allMunicipios.municipios,
    allMunicipios.errorMunicipio,
    allMunicipios.isLoadingMunicipio,
  ]);

  const handleUFChange = (uf: string) => {
    setSelectedUF(uf);
    setSelectedMunicipio('');
  };

  const handleMunicipioChange = (municipio: string) => {
    setSelectedMunicipio(municipio);
  };

  const handleSearch = () => {
    const searchData: Filtro = {
      produto: produto.trim(),
      numero: numeroCompra.trim(),
      comprador: comprador.trim(),
      uf: selectedUF,
      municipio: selectedMunicipio,
    };

    const hasSearchCriteria = Object.values(searchData).some(
      (value) => value !== ''
    );

    if (!hasSearchCriteria) {
      return;
    }

    if (redirect) {
      const queryParams = new URLSearchParams();

      if (searchData.produto) queryParams.append('produto', searchData.produto);
      if (searchData.numero) queryParams.append('numero', searchData.numero);
      if (searchData.comprador)
        queryParams.append('comprador', searchData.comprador);
      if (searchData.uf) queryParams.append('uf', searchData.uf);
      if (searchData.municipio)
        queryParams.append('municipio', searchData.municipio);

      const queryString = queryParams.toString();
      const url = `/compras-publicas${queryString ? `?${queryString}` : ''}`;

      router.push(url);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div
      className='w-full h-[72px] px-8 bg-white border flex justify-center items-center border-[#D4D4D4] rounded-[40px] overflow'
      style={{ boxShadow: '0px 4px 6px 0px #0000000F' }}
    >
      <div className='w-[70%] h-full flex items-center justify-around'>
        <div className='flex items-center justify-center'>
          <div className='w-full flex flex-col items-start justify-center'>
            <label className='font-inter font-bold text-[12px] leading-[26px] text-[#333333]'>
              Produto:
            </label>
            <input
              className='text-[12px] placeholder:text-[#D4D4D4] outline-none'
              type='text'
              placeholder='Termo ou palavra-chave'
              value={produto}
              onChange={(e) => setProduto(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
        </div>

        <div className='flex items-center justify-center'>
          <div className='w-full flex flex-col items-start justify-center'>
            <label className='font-inter font-bold text-[12px] leading-[26px] text-[#333333]'>
              Número da Compra:
            </label>
            <input
              className='font-inter text-[12px] placeholder:text-[#D4D4D4] outline-none'
              type='text'
              placeholder='Número do processo'
              value={numeroCompra}
              onChange={(e) => setNumeroCompra(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
        </div>

        <div className='flex items-center justify-center'>
          <div className='w-full flex flex-col items-start justify-center'>
            <label className='font-inter font-bold text-[12px] leading-[26px] text-[#333333]'>
              Comprador:
            </label>
            <input
              className='font-inter text-[12px] placeholder:text-[#D4D4D4] outline-none'
              type='text'
              placeholder='Nome do comprador'
              value={comprador}
              onChange={(e) => setComprador(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
        </div>
      </div>

      <div className='flex-1 flex items-center justify-between gap-2'>
        {ufs && municipiosData && (
          <DropdownLocalization
            ufs={ufs}
            municipios={municipiosData}
            selectedUF={selectedUF}
            selectedMunicipio={selectedMunicipio}
            onUFChange={handleUFChange}
            onMunicipioChange={handleMunicipioChange}
          />
        )}
        <Button
          className='w-12 h-12'
          label=''
          variant='yellow'
          icon={{
            icon: <PiMagnifyingGlass />,
            position: 'left',
          }}
          onClick={handleSearch}
        />
      </div>
    </div>
  );
};

export default AdvancedFilters;
