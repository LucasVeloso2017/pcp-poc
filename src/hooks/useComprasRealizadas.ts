import useSWR from 'swr';
import { PagedRequest } from '@/types/pagedRequest';
import { getComprasRealizadas } from '@/services/comprasRealizadasService';

export function useComprasRealizadas(params: PagedRequest) {
  const key = ['/ComprasRealizadas/compras', JSON.stringify(params)];

  const { data, error, isLoading, mutate } = useSWR(
    key, 
    () => getComprasRealizadas(params) 
  );

  return {
    compras: data,
    error,
    isLoading,
    mutate,
  };
}