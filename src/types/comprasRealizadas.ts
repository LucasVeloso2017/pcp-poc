import { Endereco } from "./endereco";


export type StatusFornecedor = 'Credenciado' | 'Expirado' | 'EmHomologacao' | 'Inativo';
// export enum StatusFornecedor {
//   Credenciado = 1,
//   Expirado = 2,
//   EmHomologacao = 3,
//   Inativo = 4
// }
export interface FornecedorResponseDto {
  id: string;                 
  empresa: string;
  cnpj: string;
  dtCredenciamento: string;   
  status: StatusFornecedor;        
  segmentos: string[];        
  enderecos: Endereco[];
}

export interface ItensCompraResponseDto {
  NomeProduto: string;
  RazaoSocial: string;
  CatMat: string;
  Qtd: number;
  Unidade: string;
  Status: string;
  Valor: number;
}

export interface ComprasRealizadas {
  id: string;
  processo: string;
  status: string;
  statusDescricao: string;
  orgao: string;
  localizacao: string;
  descricao: string;
  valor: number;
  dataCompra: string;
  dataEntrega: string;
  totalItens: number;
  fornecedores: FornecedorResponseDto[];
  grupoMaterial: string;
  classeMaterial: string;
  uasg: string;
  dataPrevisaoEntrega: string;
  prazoEntrega: string;
  garantia: string;
  itensCompra: ItensCompraResponseDto[];
}
