import { api } from '@/app/api/api';
import { Fornecedores } from '@/types/fornecedores';
import { PagedRequest } from '@/types/pagedRequest';

export const getFornecedores = async (params: PagedRequest): Promise<Fornecedores[]> => {
  try {
    const {data} = await api.get('/api/fornecedores', { params });
    return data.data.data;
  } catch (error) {
    console.error('Erro ao buscar fornecedores:', error);
    throw error; 
  }
};

export const createFornecedores = async (
  newFornecedoresData: Omit<Fornecedores, 'id'>
): Promise<Fornecedores> => {
  try {
    const response = await api.post(
      '/Fornecedores',
      newFornecedoresData
    );
    return response.data;
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    throw error;
  }
};
