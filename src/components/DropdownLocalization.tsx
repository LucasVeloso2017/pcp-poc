import React, { useState, useRef, useEffect } from 'react';
import { PiCaretDown } from 'react-icons/pi';

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
interface DropdownLocalizationProps {
  selectedUF: string;
  selectedMunicipio: string;
  onUFChange: (uf: string) => void;
  onMunicipioChange: (municipio: string) => void;
  municipios: MunicipiosProps;
  ufs: UFsProps;
}

const DropdownLocalization = ({
  selectedUF,
  selectedMunicipio,
  onUFChange,
  onMunicipioChange,
  municipios,
  ufs,
}: DropdownLocalizationProps) => {
  const [isUFOpen, setIsUFOpen] = useState(false);
  const [isMunicipioOpen, setIsMunicipioOpen] = useState(false);

  const ufRef = useRef(null);
  const municipioRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ufRef.current && !ufRef.current.contains(event.target)) {
        setIsUFOpen(false);
      }
      if (
        municipioRef.current &&
        !municipioRef.current.contains(event.target)
      ) {
        setIsMunicipioOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleUFSelect = (ufValue: string) => {
    onUFChange(ufValue);
    setIsUFOpen(false);
  };

  const handleMunicipioSelect = (municipioValue: string) => {
    onMunicipioChange(municipioValue);
    setIsMunicipioOpen(false);
  };

  const getUFLabel = () => {
    if (!selectedUF) return 'UF';
    const uf = ufs.ufs?.find((u) => u === selectedUF);
    return uf ? uf : selectedUF;
  };

  const getMunicipioLabel = () => {
    if (!selectedMunicipio) return 'Município';
    const municipio = municipios?.municipios?.find(
      (m) => m === selectedMunicipio
    );
    return municipio ? municipio : selectedMunicipio;
  };

  return (
    <div className='relative' style={{ zIndex: 1000 }}>
      <div className='w-[214px] h-[56px] rounded-[26px] border border-[#D4D4D4] flex items-center justify-center'>
        <div
          ref={ufRef}
          className='w-1/2 border-r border-[#D9D9D9] flex justify-center items-center gap-1 relative'
        >
          <button
            onClick={() =>
              !ufs?.isLoadingUF && !ufs?.errorUF && setIsUFOpen(!isUFOpen)
            }
            disabled={ufs?.isLoadingUF || ufs?.errorUF}
            className={`w-full flex justify-center items-center gap-1 cursor-pointer bg-transparent border-none outline-none ${
              ufs?.isLoadingUF || ufs?.errorUF
                ? 'cursor-not-allowed opacity-60'
                : ''
            }`}
          >
            <span
              className={`font-inter font-bold text-[12px] ${
                ufs?.errorUF ? 'text-red-500' : 'text-[#717171]'
              }`}
            >
              {getUFLabel()}
            </span>

            {ufs?.isLoadingUF ? (
              <div className='w-3 h-3 border border-[#717171] border-t-transparent rounded-full animate-spin'></div>
            ) : (
              <PiCaretDown
                className={`w-3 h-3 transition-transform ${
                  ufs?.errorUF ? 'text-red-500' : 'text-[#717171]'
                } ${isUFOpen ? 'rotate-180' : ''}`}
              />
            )}
          </button>

          {isUFOpen && !ufs?.isLoadingUF && !ufs?.errorUF && (
            <div
              className='absolute top-full left-0 right-0 mt-1 bg-white border border-[#D4D4D4] rounded-lg shadow-lg z-[9999] max-h-60 overflow-y-auto'
              style={{
                minWidth: 'max-content',
                position: 'absolute',
              }}
            >
              {ufs.ufs && ufs.ufs?.length > 0 ? (
                ufs.ufs?.map((uf) => (
                  <button
                    key={uf}
                    onClick={() => handleUFSelect(uf)}
                    className={`w-full cursor-pointer px-3 py-2 text-left hover:bg-gray-100 font-inter text-[12px] text-[#717171] first:rounded-t-lg last:rounded-b-lg block border-none outline-none ${
                      selectedUF === uf
                        ? 'bg-gray-200 text-gray-800'
                        : 'bg-white'
                    }`}
                    style={{
                      background: selectedUF === uf ? '#e5e7eb' : 'white',
                      color: selectedUF === uf ? '#374151' : '#717171',
                      border: 'none',
                      padding: '8px 12px',
                      boxShadow:
                        selectedUF === uf
                          ? 'inset 0 2px 4px rgba(0, 0, 0, 0.1)'
                          : 'none',
                    }}
                  >
                    {uf}
                  </button>
                ))
              ) : (
                <div className='px-3 py-2 text-[12px] text-gray-500 text-center'>
                  Nenhuma UF disponível
                </div>
              )}
            </div>
          )}

          {ufs?.errorUF && isUFOpen && (
            <div
              className='absolute top-full left-0 right-0 mt-1 bg-white border border-red-300 rounded-lg shadow-lg z-[9999]'
              style={{ minWidth: 'max-content' }}
            >
              <div className='px-3 py-2 text-[12px] text-red-500 text-center'>
                Erro ao carregar UFs
              </div>
            </div>
          )}
        </div>

        <div
          ref={municipioRef}
          className='w-1/2 flex justify-center items-center gap-1 relative'
        >
          <button
            onClick={() =>
              !municipios?.isLoadingMunicipio &&
              !municipios?.errorMunicipio &&
              setIsMunicipioOpen(!isMunicipioOpen)
            }
            disabled={
              municipios?.isLoadingMunicipio || municipios?.errorMunicipio
            }
            className={`w-full flex justify-center items-center gap-1 cursor-pointer bg-transparent border-none outline-none ${
              municipios?.isLoadingMunicipio || municipios?.errorMunicipio
                ? 'cursor-not-allowed opacity-60'
                : ''
            }`}
          >
            <span
              className={`font-inter font-bold text-[12px] ${
                municipios?.errorMunicipio ? 'text-red-500' : 'text-[#717171]'
              }`}
            >
              {getMunicipioLabel()}
            </span>

            {municipios?.isLoadingMunicipio ? (
              <div className='w-3 h-3 border border-[#717171] border-t-transparent rounded-full animate-spin'></div>
            ) : (
              <PiCaretDown
                className={`w-3 h-3 transition-transform ${
                  municipios?.errorMunicipio ? 'text-red-500' : 'text-[#717171]'
                } ${isMunicipioOpen ? 'rotate-180' : ''}`}
              />
            )}
          </button>

          {isMunicipioOpen &&
            !municipios?.isLoadingMunicipio &&
            !municipios?.errorMunicipio && (
              <div
                className='absolute top-full left-0 right-0 mt-1 bg-white border border-[#D4D4D4] rounded-lg shadow-lg z-[9999] max-h-60 overflow-y-auto'
                style={{
                  minWidth: 'max-content',
                  position: 'absolute',
                }}
              >
                {municipios && municipios.municipios?.length > 0 ? (
                  municipios.municipios.map((municipio) => (
                    <button
                      key={municipio}
                      onClick={() => handleMunicipioSelect(municipio)}
                      className={`w-full cursor-pointer px-3 py-2 text-left hover:bg-gray-100 font-inter text-[12px] text-[#717171] first:rounded-t-lg last:rounded-b-lg block border-none outline-none ${
                        selectedMunicipio === municipio
                          ? 'bg-gray-200 text-gray-800'
                          : 'bg-white'
                      }`}
                      style={{
                        background:
                          selectedMunicipio === municipio ? '#e5e7eb' : 'white',
                        color:
                          selectedMunicipio === municipio
                            ? '#374151'
                            : '#717171',
                        border: 'none',
                        padding: '8px 12px',
                        boxShadow:
                          selectedMunicipio === municipio
                            ? 'inset 0 2px 4px rgba(0, 0, 0, 0.1)'
                            : 'none',
                      }}
                    >
                      {municipio}
                    </button>
                  ))
                ) : (
                  <div className='px-3 py-2 text-[12px] text-gray-500 text-center'>
                    {!selectedUF
                      ? 'Selecione uma UF primeiro'
                      : 'Nenhum município disponível'}
                  </div>
                )}
              </div>
            )}

          {municipios.errorMunicipio && isMunicipioOpen && (
            <div
              className='absolute top-full left-0 right-0 mt-1 bg-white border border-red-300 rounded-lg shadow-lg z-[9999]'
              style={{ minWidth: 'max-content' }}
            >
              <div className='px-3 py-2 text-[12px] text-red-500 text-center'>
                Erro ao carregar municípios
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default DropdownLocalization;
