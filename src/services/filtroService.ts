import { api } from '@/app/api/api';

export const getUF = async (): Promise<string[]> => {
  try {
    const { data } = await api.get('/api/ufs');
    console.log(data.data, 'testestestestestes');
    return data.data;
  } catch (error) {
    console.error('Erro ao buscar UFs:', error);
    throw error;
  }
};

export const getMunicipiosByUf = async (uf: string): Promise<string[]> => {
  try {
    console.log('Buscando municípios para UF:', uf);

    if (!uf || uf.trim() === '') {
      throw new Error('UF é obrigatória para buscar municípios');
    }

    const { data } = await api.get('/api/municipios', {
      params: { uf: uf.trim().toUpperCase() }, 
    });

    if (!data || !Array.isArray(data.data)) {
      console.warn('Formato de dados inválido para municípios:', data);
      return [];
    }

    return data.data;
  } catch (error) {
    console.error('Erro ao buscar municípios para UF', uf, ':', error);
    throw error; 
  }
};

export const getMunicipios = async (): Promise<string[]> => {
  try {
    const { data } = await api.get('/api/all-municipios');
    return data.data;
  } catch (error) {
    console.error('Erro ao buscar municípios:', error);
    throw error;
  }
};
