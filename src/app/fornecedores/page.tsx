import React from 'react';
import { 
  PiShoppingCart, 
  PiClockClockwise, 
  PiMagnifyingGlass,
  PiReceipt,
  PiTruck,
  PiMailbox,
  PiTruckTrailer,
  PiHourglassSimpleHigh,
  PiHandCoins,
  PiAcorn,
  PiBasket
} from 'react-icons/pi';


export default function FornecedorDashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Título da Página */}
        <header>
          <h1 className="text-3xl font-bold text-gray-900">
            Bem-vindo ao dashboard do Marketplace
          </h1>
          <p className="mt-2 text-base font-normal text-[#717171] leading-none">
            Visão geral dos seus pedidos e compras
          </p>
        </header>

        {/* Seção de Cards de Estatísticas */}
        <section className="mt-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            
            {/* Card 1: Meus Carrinhos */}
            <div className="bg-white rounded-lg shadow-sm p-6 flex items-center gap-5 h-[124px]">
              <div className="flex-shrink-0 h-[52px] w-[52px] flex items-center justify-center rounded-lg bg-cyan-100">
                <PiShoppingCart className="h-7 w-7 text-cyan-700" />
              </div>
              <div>
                <p className="text-xs text-[#333333] font-normal leading-tight">Meus Carrinhos</p>
                <p className="text-2xl font-bold text-gray-900">
                  44 <span className="text-base font-semibold text-[#333333] leading-none"> Ativos</span>
                </p>
              </div>
            </div>

            {/* Card 2: Aguardando aprovação */}
            <div className="bg-white rounded-lg shadow-sm p-6 flex items-center gap-5 h-[124px]">
              <div className="flex-shrink-0 h-[52px] w-[52px] flex items-center justify-center rounded-lg bg-amber-100">
                <PiHourglassSimpleHigh className="h-7 w-7 text-amber-700" />
              </div>
              <div>
                <p className="text-xs text-[#333333] font-normal leading-tight">Aguardando aprovação</p>
                <p className="text-2xl font-bold text-gray-900">
                  444 <span className="text-base font-semibold text-[#333333] leading-none"> Pedidos</span>
                </p>
              </div>
            </div>

            {/* Card 3: Aguardando aceitação */}
            <div className="bg-white rounded-lg shadow-sm p-6 flex items-center gap-5 h-[124px]">
              <div className="flex-shrink-0 h-[52px] w-[52px] flex items-center justify-center rounded-lg bg-gray-100">
                <PiClockClockwise className="h-7 w-7 text-gray-700" />
              </div>
              <div>
                <p className="text-xs text-[#333333] font-normal leading-tight">Aguardando aceitação do fornecedor</p>
                <p className="text-2xl font-bold text-gray-900">
                  9 <span className="text-base font-semibold text-[#333333] leading-none"> Pedidos</span>
                </p>
              </div>
            </div>

            {/* Card 4: Aguardando empenho */}
            <div className="bg-white rounded-lg shadow-sm p-6 flex items-center gap-5 h-[124px]">
              <div className="flex-shrink-0 h-[52px] w-[52px] flex items-center justify-center rounded-lg bg-red-100">
                <PiHandCoins className="h-7 w-7 text-red-700" />
              </div>
              <div>
                <p className="text-xs text-[#333333] font-normal leading-tight">Aguardando empenho/liquidação/pagamento</p>
                <p className="text-2xl font-bold text-gray-900">
                  9 <span className="text-base font-semibold text-[#333333] leading-none"> Pedidos</span>
                </p>
              </div>
            </div>
            
            {/* Card 5: Aguardando entrega */}
            <div className="bg-white rounded-lg shadow-sm p-6 flex items-center gap-5 h-[124px]">
              <div className="flex-shrink-0 h-[52px] w-[52px] flex items-center justify-center rounded-lg bg-violet-100">
                <PiTruckTrailer className="h-7 w-7 text-violet-700" />
              </div>
              <div>
                <p className="text-xs text-[#333333] font-normal leading-tight">Pedidos aguardando entrega</p>
                <p className="text-2xl font-bold text-gray-900">
                  55 <span className="text-base font-semibold text-[#333333] leading-none"> Pedidos</span>
                </p>
              </div>
            </div>

            {/* Card 6: Compras finalizadas */}
            <div className="bg-white rounded-lg shadow-sm p-6 flex items-center gap-5 h-[124px]">
              <div className="flex-shrink-0 h-[52px] w-[52px] flex items-center justify-center rounded-lg bg-emerald-100">
                <PiAcorn className="h-7 w-7 text-emerald-700" />
              </div>
              <div>
                <p className="text-xs text-[#333333] font-normal leading-tight">Compras finalizadas</p>
                <p className="text-2xl font-bold text-gray-900">
                  5 <span className="text-base font-semibold text-[#333333] leading-none w-[71px] h-[11px]"> Compras</span>
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Seção de Ações Rápidas dentro de um card branco */}
        <section className="mt-8 bg-white rounded-t-[16px] rounded-b-[40px] border border-gray-200 shadow-sm">
           <div className="border-b border-gray-200 h-[55px] flex items-center px-6">
              <h2 className="text-lg font-bold text-gray-800">Ações Rápidas</h2>
            </div>

          <div className="p-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            
              {/* Card 1: BUSCAR & COMPRAR */}
              <div className="p-5 rounded-lg transition-colors cursor-pointer bg-green-50 hover:bg-green-100">
                <div className="flex items-center gap-4">
                  <PiMagnifyingGlass className="h-5 w-5 text-[#333333]"/>
                  <p className="font-bold text-sm text-gray-800">BUSCAR & COMPRAR</p>
                </div>
                <p className="text-xs text-[#333333] font-normal leading-tight mt-2">Pesquise no catálogo</p>
              </div>
              
              {/* Card 2: MEUS CARRINHOS */}
              <div className="p-5 rounded-lg transition-colors cursor-pointer bg-blue-50 hover:bg-blue-100">
                <div className="flex items-center gap-4">
                  <PiBasket className="h-5 w-5 text-[#333333]"/>
                  <p className="font-bold text-sm text-gray-800">MEUS CARRINHOS</p>
                </div>
                <p className="text-xs text-[#333333] font-normal leading-tight mt-2">Ver carrinhos ativos e finalizar compra</p>
              </div>

              {/* Card 3: AUTORIZAÇÕES */}
              <div className="p-5 rounded-lg transition-colors cursor-pointer bg-yellow-50 hover:bg-yellow-100">
                <div className="flex items-center gap-4">
                  <PiMailbox className="h-5 w-5 text-[#333333]"/>
                  <p className="font-bold text-sm text-gray-800">AUTORIZAÇÕES</p>
                </div>
                <p className="text-xs text-[#333333] font-normal leading-tight mt-2">Alguma descrição aqui</p>
              </div>

              {/* Card 4: MINHA COMPRAS */}
              <div className="p-5 rounded-lg transition-colors cursor-pointer bg-blue-50 hover:bg-blue-100">
                <div className="flex items-center gap-4">
                  <PiReceipt className="h-5 w-5 text-[#333333]"/>
                  <p className="font-bold text-sm text-gray-800">MINHA COMPRAS</p>
                </div>
                <p className="text-xs text-[#333333] font-normal leading-tight mt-2">Histórico e Relatórios</p>
              </div>

              {/* Card 5: ACOMPANHAR ENTREGA */}
              <div className="p-5 rounded-lg transition-colors cursor-pointer bg-blue-50 hover:bg-blue-100">
                <div className="flex items-center gap-4">
                  <PiTruck className="h-5 w-5 text-[#333333]"/>
                  <p className="font-bold text-sm text-gray-800">ACOMPANHAR ENTREGA</p>
                </div>
                <p className="text-xs text-[#333333] font-normal leading-tight mt-2">Rastrear entregas</p>
              </div>

              {/* Card 6: MENSAGENS */}
              <div className="p-5 rounded-lg transition-colors cursor-pointer bg-blue-50 hover:bg-blue-100">
                <div className="flex items-center gap-4">
                  <PiMailbox className="h-5 w-5 text-[#333333]"/>
                  <p className="font-bold text-sm text-gray-800">MENSAGENS</p>
                </div>
                <p className="text-xs text-[#333333] font-normal leading-tight mt-2">Mensagens de fornecedores</p>
              </div>

            </div>
          </div>
          
        </section>

      </div>
    </main>
  );
}