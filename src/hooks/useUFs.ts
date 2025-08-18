import useSWR from 'swr';
import { getUF } from '@/services/filtroService';

export function useUFs() {
  const key = ['/Filtros/ufs'];

  const { data, error, isLoading, mutate } = useSWR(key, () => getUF());

  return {
    ufs: data,
    errorUFs: error,
    isLoadingUFs: isLoading,
    mutate,
  };
}
