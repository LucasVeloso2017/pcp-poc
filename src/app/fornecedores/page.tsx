import AdvancedFilters from "@/components/AdvancedFilters";
import { Pagination } from "@/components/Pagination";
import { SuppliersTable } from "@/components/SuppliersTable";

export default function Page() {
  return (
    <div className="w-full flex justify-center py-15">
      <div className="w-[80%] flex flex-col gap-10">
        <div className='flex flex-col gap-2 items-center'>
          <h1 className='font-dm-sans font-[600] text-[36px] self-start'>
            Fornecedores Credenciados
          </h1>
          <p className='font-inter font-[400] self-start regular text-[16px] text-[#717171]'>
            Transparência: veja quem está apto a participar dos processos de compras públicas. <br />
            Consulte empresas credenciadas e seus dados de habilitação.
          </p>
        </div>
        <div className="w-full flex items-center justify-start">
          <div className="w-[920px]">
            <AdvancedFilters />
          </div>
        </div>
        <div className='w-full flex flex-col gap-6'>
          <p className='font-dm-sans font-normal text-[14px] leading-[120%] text-[#6B7280]'>
            Mostrando 15 de 15 colaboradores
          </p>
        </div>
        <SuppliersTable/>
        <Pagination />
      </div>
    </div>
  );
}
