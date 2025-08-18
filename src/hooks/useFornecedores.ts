import { getFornecedores } from './../services/fornecedoresService';
import useSWR from 'swr';
import { PagedRequest } from '@/types/pagedRequest';

export function useFornecedores(params: PagedRequest) {
  const key = ['/Fornecedores/fornecedores', JSON.stringify(params)];

  const { data, error, isLoading, mutate } = useSWR(
    key, 
    () => getFornecedores(params) 
  );

  return {
    fornecedores: data,
    error,
    isLoading,
    mutate,
  };
}