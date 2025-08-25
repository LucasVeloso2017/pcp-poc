import { Endereco } from "./endereco";

export interface Fornecedores {
  id: string;                 
  empresa: string;
  cnpj: string;
  dtCredenciamentoInicio: string;   
  dtCredenciamentoFim: string;   
  status: number;     
  statusDescricao: string;        
  segmentos: string[];     
  especialidades: string[];   
  enderecos: Endereco[]; 
}