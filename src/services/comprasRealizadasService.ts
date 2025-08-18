import { api } from '@/app/api/api';
import { ComprasRealizadas } from '@/types/comprasRealizadas';
import { PagedRequest } from '@/types/pagedRequest';

export const getComprasRealizadas = async (params: PagedRequest): Promise<ComprasRealizadas[]> => {
  try {
    const {data} = await api.get('/api/compras', { params });
    return data.data;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    throw error; 
  }
};

export const createComprasRealizadas = async (
  newComprasRealizadasData: Omit<ComprasRealizadas, 'id'>
): Promise<ComprasRealizadas> => {
  try {
    const response = await api.post(
      '/ComprasRealizadas',
      newComprasRealizadasData
    );
    return response.data;
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    throw error;
  }
};
