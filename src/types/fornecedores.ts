import { Endereco } from "./endereco";

export interface Fornecedores {
  id: string;                 
  empresa: string;
  cnpj: string;
  dtCredenciamento: string;   
  status: string;             
  segmentos: string[];        
  enderecos: Endereco[]; 
}