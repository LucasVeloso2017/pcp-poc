import useSWR from 'swr';
import { getMunicipios } from '@/services/filtroService';

export function useAllMunicipios() {
  const key = ['/Filtros/allMunicipios'];

  const { data, error, isLoading, mutate } = useSWR(key, () =>
    getMunicipios()
  );

  return {
    municipios: data,
    errorAllMunicipios: error,
    isLoadingAllMunicipios: isLoading,
    mutate,
  };
}
