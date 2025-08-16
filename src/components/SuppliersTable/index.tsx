import { PiCalendar, PiCheck, PiMapPin, PiWarningCircle, PiX } from "react-icons/pi";

interface Supplier {
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

const suppliers: Supplier[] = [
   {
      id: 1,
      empresa: 'TechSolutions Informática Ltda',
      cnpj: '12.345.678/0001-80',
      segmento: 'Tecnologia',
      localizacao: { cidade: 'São Paulo', estado: 'SP' },
      credenciamento: { validade: '14/03/2024', expiracao: '14/03/2025' },
      status: 'Habilitado',
      especialidades: ['Hardware', 'Software'],
   },
   {
      id: 2,
      empresa: 'MedSupply Equipamentos Médicos S/A',
      cnpj: '23.456.789/0001-01',
      segmento: 'Saúde',
      localizacao: { cidade: 'Rio de Janeiro', estado: 'RJ' },
      credenciamento: { validade: '18/01/2024', expiracao: '18/01/2025' },
      status: 'Habilitado',
      especialidades: ['Equipamentos Médicos', 'Instrumentos Cirúrgicos'],
   },
   {
      id: 3,
      empresa: 'Construção Brasil Ltda',
      cnpj: '34.567.890/0001-12',
      segmento: 'Construção',
      localizacao: { cidade: 'Belo Horizonte', estado: 'MG' },
      credenciamento: { validade: '09/06/2024', expiracao: '09/06/2025' },
      status: 'Habilitado',
      especialidades: ['Obras Civis', 'Infraestrutura'],
   },
   {
      id: 4,
      empresa: 'AgroInsumos do Cerrado Ltda',
      cnpj: '45.678.901/0001-23',
      segmento: 'Agropecuária',
      localizacao: { cidade: 'Goiânia', estado: 'GO' },
      credenciamento: { validade: '04/12/2023', expiracao: '04/12/2024' },
      status: 'Expirado',
      especialidades: ['Fertilizantes', 'Sementes'],
   },
   {
      id: 5,
      empresa: 'EcoSoluções Ambientais S/A',
      cnpj: '56.789.012/0001-34',
      segmento: 'Meio Ambiente',
      localizacao: { cidade: 'Porto Alegre', estado: 'RS' },
      credenciamento: { validade: '21/08/2024', expiracao: '21/08/2025' },
      status: 'Habilitado',
      especialidades: ['Fertilizantes', 'Sementes'],
   },
];

export const SuppliersTable = () => {
   return (
      <div className="w-full rounded-xl overflow-hidden mx-auto ">
         <div className="pb-6 pl-6">
            <h2 className="text-[#111827] text-xl font-bold">Lista de Fornecedores</h2>
         </div>

         <div className="overflow-x-auto">
            <table className="w-full text-left table-fixed">
               <thead className="bg-[#F7A622] text-white uppercase text-sm">
                  <tr>
                     <th scope="col" className="w-[25%] py-[10px] font-bold text-center tracking-wider">EMPRESA</th>
                     <th scope="col" className="w-[15%] py-[10px] font-bold text-center tracking-wider">CNPJ</th>
                     <th scope="col" className="w-[15%] py-[10px] font-bold text-center tracking-wider">SEGMENTO</th>
                     <th scope="col" className="w-[16%] py-[10px] font-bold text-center tracking-wider">LOCALIZAÇÃO</th>
                     <th scope="col" className="w-[20%] py-[10px] font-bold text-center tracking-wider">CREDENCIAMENTO</th>
                     <th scope="col" className="w-[12%] py-[10px] font-bold text-center tracking-wider">STATUS</th>
                     <th scope="col" className="w-[20%] py-[10px] font-bold text-center tracking-wider">ESPECIALIDADES</th>
                  </tr>
               </thead>
               <tbody className="divide-y">
                  {suppliers.map((supplier) => (
                     <tr key={supplier.id} className="bg-white">
                        <td className="py-[18px] text-sm font-medium whitespace-nowrap overflow-hidden text-ellipsis">{supplier.empresa}</td>
                        <td className="py-[18px] text-sm font-light">{supplier.cnpj}</td>
                        <td className="py-[18px]">
                           <span className="w-full inline-flex items-center justify-center rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-semibold text-[#374151]">
                              {supplier.segmento}
                           </span>
                        </td>
                        <td className="py-[18px] text-sm">
                           <div className="flex items-center justify-center gap-2">
                              <PiMapPin size={16} className="text-[#6B7280]" />
                              <span>{supplier.localizacao.cidade}, {supplier.localizacao.estado}</span>
                           </div>
                        </td>
                        <td className="py-[18px] text-sm">
                           <div className="flex items-start justify-center gap-2">
                              <div className="flex flex-col items-center justify-center">
                                 <span className="flex items-center"><PiCalendar size={16} className="text-[#6B7280] mt-1" />{supplier.credenciamento.validade}</span>
                                 <span className="text-xs text-[#6B7280]">Válido até: {supplier.credenciamento.expiracao}</span>
                              </div>
                           </div>
                        </td>
                        <td className="py-[18px]">
                           <div className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${supplier.status === 'Habilitado'
                                 ? 'bg-[#1AB0C3] text-white'
                                 : 'bg-[#FEE2E2] text-[#B91C1C]'
                              }`}>
                              {supplier.status === 'Habilitado' ? (
                                 <PiCheck size={14} className="mr-1" />
                              ) : (
                                 <PiWarningCircle size={14} className="mr-1" />
                              )}
                              {supplier.status}
                           </div>
                        </td>
                        <td className="py-[18px]">
                           <div className="flex flex-wrap gap-2">
                              {supplier.especialidades.map((specialty, index) => (
                                 <span key={index} className="inline-flex items-center rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-semibold text-[#374151]">
                                    {specialty}
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

