import useSWR from 'swr';
import { getMunicipiosByUf } from '@/services/filtroService';

export function useMunicipios(uf: string) {
  const key = uf ? ['/Filtros/municipios', uf] : null;

  const { data, error, isLoading, mutate } = useSWR(key, () =>
    getMunicipiosByUf(uf!)
  );
  return {
    municipios: data || [],
    errorMunicipio: error,
    isLoadingMunicipio: isLoading,
    mutate,
  };
}
