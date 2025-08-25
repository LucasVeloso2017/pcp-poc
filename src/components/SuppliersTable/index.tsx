import { Fornecedores } from "@/types/fornecedores";
import { format } from "date-fns";
import { PiCalendar, PiCheck, PiMapPin, PiWarningCircle, PiX } from "react-icons/pi";

interface fornecedor {
   id: number;
   empresa: string;
   cnpj: string;
   segmento: string;
   localizacao: {
      cidade: string;
      estado: string;
   };
   credenciamento: {
      validade: string;
      expiracao: string;
   };
   status: 'Habilitado' | 'Expirado';
   especialidades: string[];
}
interface fornecedorsTableProps {
   fornecedores: Fornecedores[];
}

export const SuppliersTable = ({fornecedores}: fornecedorsTableProps) => {
   return (
      <div className="w-full rounded-xl overflow-hidden mx-auto ">
         <div className="pb-6 pl-6">
            <h2 className="text-[#111827] text-xl font-bold">Lista de Fornecedores</h2>
         </div>

         <div className="overflow-x-auto">
            <table className="w-full text-left table-fixed">
               <thead className="bg-[#F7A622] text-white uppercase text-sm">
                  <tr>
                     <th scope="col" className="w-[25%] py-[10px] font-dm-sans font-bold text-center tracking-wider">EMPRESA</th>
                     <th scope="col" className="w-[15%] py-[10px] font-dm-sans font-bold text-center tracking-wider">CNPJ</th>
                     <th scope="col" className="w-[15%] py-[10px] font-dm-sans font-bold text-center tracking-wider">SEGMENTO</th>
                     <th scope="col" className="w-[16%] py-[10px] font-dm-sans font-bold text-center tracking-wider">LOCALIZAÇÃO</th>
                     <th scope="col" className="w-[20%] py-[10px] font-dm-sans font-bold text-center tracking-wider">CREDENCIAMENTO</th>
                     <th scope="col" className="w-[12%] py-[10px] font-dm-sans font-bold text-center tracking-wider">STATUS</th>
                     <th scope="col" className="w-[20%] py-[10px] font-dm-sans font-bold text-center tracking-wider">ESPECIALIDADES</th>
                  </tr>
               </thead>
               <tbody className="divide-y">
                  {fornecedores && fornecedores.map((fornecedor) => (
                     <tr key={fornecedor.id} className="bg-white">
                        <td className="py-[18px] text-sm font-medium whitespace-nowrap overflow-hidden text-ellipsis">{fornecedor.empresa}</td>
                        <td className="py-[18px] text-sm font-light">{fornecedor.cnpj}</td>
                        <td className="py-[18px]">
                           <span className="w-full inline-flex items-center justify-center rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-semibold text-[#374151]">
                              {fornecedor.segmentos[0]}
                           </span>
                        </td>
                        <td className="py-[18px] text-sm">
                           <div className="flex items-center justify-center gap-2">
                              <PiMapPin size={16} className="text-[#6B7280]" />
                              <span>{fornecedor.enderecos[0].cidade}, {fornecedor.enderecos[0].estado}</span>
                           </div>
                        </td>
                        <td className="py-[18px] text-sm">
                           <div className="flex items-start justify-center gap-2">
                              <div className="flex flex-col items-center justify-center">
                                 <span className="flex items-center"><PiCalendar size={16} className="text-[#6B7280] mt-1" />{format(new Date(fornecedor.dtCredenciamentoInicio), 'dd/MM/yyyy')}</span>
                                 <span className="text-xs text-[#6B7280]">Válido até: {format(new Date(fornecedor.dtCredenciamentoFim), 'dd/MM/yyyy')}</span>
                              </div>
                           </div>
                        </td>
                        <td className="py-[18px]">
                           <div className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${fornecedor.statusDescricao === 'Habilitado'
                                 ? 'bg-[#1AB0C3] text-white'
                                 : 'bg-[#FEE2E2] text-[#B91C1C]'
                              }`}>
                              {fornecedor.statusDescricao === 'Habilitado' ? (
                                 <PiCheck size={14} className="mr-1" />
                              ) : (
                                 <PiWarningCircle size={14} className="mr-1" />
                              )}
                              {fornecedor.statusDescricao}
                           </div>
                        </td>
                        <td className="py-[18px]">
                           <div className="flex flex-wrap gap-2">
                              {fornecedor.especialidades.map((speciality, index) => (
                                 <span key={index} className="inline-flex items-center rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-semibold text-[#374151]">
                                    {speciality}
                                 </span>
                              ))}
                           </div>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

