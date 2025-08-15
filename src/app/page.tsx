'use client'
import AdvancedFilters from "@/components/AdvancedFilters";
import Button from "@/components/Button";
import BuyCard from "@/components/BuyCard";
import Etapas from "@/components/Etapas";
import Filter from "@/components/Filter";
import LastBuyCard from "@/components/LastBuyCard";
import { PiCheckCircle, PiEye, PiFileText, PiListChecks, PiMagnifyingGlass, PiMagnifyingGlassMinus, PiPlus, PiSealCheck, PiShoppingCart, PiUser } from "react-icons/pi";

const etapas = [
  {
    icone: (
      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#E9F8F9]">
        <PiUser className="w-7 h-7 text-[#1AB0C3]" />
      </div>
    ),
    titulo: 'Cadastrar & Habilitar',
    descricao:
      'Empresas se credenciam na plataforma seguindo os critérios exigidos pela legislação vigente.Fornecedores cadastram seus produtos.',
  },
  {
    icone:  (
      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#E9F8F9]">
        <PiFileText className="w-7 h-7 text-[#1AB0C3]" />
      </div>
    ),
    titulo: 'Selecionar & Contratar',
    descricao:
      'Órgãos selecionam itens por meio de jornadas transparentes Fornecedores confirmam disponibilidade e prazos. Pedidos são emitidos e pagamentos autorizados.',
  },
  {
    icone: (
      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#E9F8F9]">
        <PiEye className="w-7 h-7 text-[#1AB0C3]" />
      </div>
    ),
    titulo: 'Entregar & Receber',
    descricao:
      'Entrega concluída e aprovada pelo comprador. Após conferência, o valor é creditado ao fornecedor. Todo o processo permanece disponível para consulta pública, assegurando transparência e controle social.',
  },
];

const compras = [
  {
    processo: '00124/2025',
    data: '15/01/2025',
    orgao: 'Ministério da Educação',
    descricao: 'Aquisição de equipamentos de informática para escolas públicas',
    valorTotal: '25.890.169,00',
    status: 'Em andamento',
  },
  {
    processo: '67890/2023',
    data: '02/01/2023',
    orgao: 'Ministério da Educação',
    descricao: 'Aquisição de Material Didático',
    valorTotal: 'R$ 500.000,00',
    status: 'Concluído',
  },
  {
    processo: '54321/2024',
    data: '10/05/2024',
    orgao: 'Ministério da Saúde',
    descricao: 'Compra de Equipamentos Médicos',
    valorTotal: 'R$ 1.200.000,00',
    status: 'Em andamento',
  },
];

export default function Home() {
return (
    <div className="w-full bg-white">
      <div
        className="w-full h-[896px] bg-cover bg-right bg-no-repeat flex"
        style={{ backgroundImage: `url(/img/bg-hero-pcp.png)`, backgroundPosition: '78% center' }}
      >
        <div className="w-[80%] flex justify-center pt-48">
          <div className="w-[920px] flex flex-col">
            <h1 className="font-dm-sans text-[40px] leading-[130%] font-bold text-[#081E2D]">
              Marketplace - Onde Governo e Mercado fecham negócios rápidos com transparência.
            </h1>
            <br />
            <p className="font-dm-sans font-normal text-[18px] leading-[150%] text-[#333333]">
              Fazendo simples, conectamos tecnologia, transparência e impacto social para que gestores públicos, fornecedores e sociedade avancem juntos.
            </p>
            <br />
            <div className="flex items-center justify-start gap-3">
              <div className="bg-[#E9F8F9] py-2 px-3 flex items-center justify-center gap-1 rounded-2xl">
                <PiCheckCircle className="text-[#0085AC] w-4 h-4" />
                <span className="font-dm-sans font-bold text-[12px] text-[#00606C]">
                  Certificações: ISO 9001 | ISO 27001 | 27701 | ISO2000-1
                </span>
              </div>
              <div className="bg-[#E9F8F9] py-2 px-3 flex items-center justify-center gap-1 rounded-2xl">
                <PiCheckCircle className="text-[#0085AC] w-4 h-4" />
                <span className="font-dm-sans font-bold text-[12px] text-[#00606C]">
                  Integrado ao PNCP
                </span>
              </div>
              <div className="bg-[#E9F8F9] py-2 px-3 flex items-center justify-center gap-1 rounded-2xl">
                <PiCheckCircle className="text-[#0085AC] w-4 h-4" />
                <span className="font-dm-sans font-bold text-[12px] text-[#00606C]">
                  Segurança Blockchain
                </span>
              </div>
              <div className="bg-[#E9F8F9] py-2 px-3 flex items-center justify-center gap-1 rounded-2xl">
                <PiCheckCircle className="text-[#0085AC] w-4 h-4" />
                <span className="font-dm-sans font-bold text-[12px] text-[#00606C]">
                  Suporte especializado
                </span>
              </div>
            </div>
            <br />
            <div className="w-full h-[72px]">
              <AdvancedFilters />
            </div>
            <div className="mt-15 w-full flex items-center gap-5">
              <Button
                className='w-[260px] uppercase'
                label='quero vender'
                variant='yellow'
              />
              <Button
                className='w-[260px] uppercase'
                label='quero comprar'
                variant='blue'
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center py-15">
        <div className="w-[80%] flex flex-col items-center justify-center">
          <h1 className="font-dm-sans font-bold text-[48px] text-[#1A1A1A]">Nossas Soluções</h1>
          <h4 className="font-inter font-normal text-lg text-[#555555]">Plataforma completa para todas as necessidades de compras públicas</h4>

          <div className="w-full flex items-center justify-between mt-18">
            <div className="flex flex-col items-center justify-center">
              <div className="w-15 h-15 rounded-xl flex items-center justify-center bg-[#E9F8F9]">
                <PiSealCheck className="w-8 h-8 text-[#1AB0C3]" />
              </div>
              <span className="mt-3 mb-3 font-inter font-bold text-[20px] text-[#1A1A1A]">
                Catálogo Vivo
              </span>
              <p className="font-inter text-center font-normal text-[14px] text-[#555555]">
                Preços dinâmicos com históricos de alterações <br />
                realizadas de forma inteligênte. Atualizações <br />
                controladas com trilha de auditoria
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-15 h-15 rounded-xl flex items-center justify-center bg-[#E9F8F9]">
                <PiListChecks className="w-8 h-8 text-[#1AB0C3]" />
              </div>
              <span className="mt-3 mb-3 font-inter font-bold text-[20px] text-[#1A1A1A]">
                Classificação Automática
              </span>
              <p className="font-inter text-center font-normal text-[14px] text-[#555555]">
                Sistema processa menor preço <br />
                com desempate de forma automática, <br />
                gerando contratos conforme lei e de forma inteligênte.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-15 h-15 rounded-xl flex items-center justify-center bg-[#E9F8F9]">
                <PiShoppingCart className="w-8 h-8 text-[#1AB0C3]" />
              </div>
              <span className="mt-3 mb-3 font-inter font-bold text-[20px] text-[#1A1A1A]">
                Experiência E-commerce
              </span>
              <p className="font-inter text-center font-normal text-[14px] text-[#555555]">
                Carrinho de compras, preços com o melhor valor <br />
                em tempo real e UX inspirada no <br />
                varejo digital.
              </p>
            </div>
          </div>

          <div className="w-full flex items-center justify-between mt-18">
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-dm-sans font-bold text-[48px] text-[#1AB0C3]">
                +10 mil
              </h1>
              <h3 className="mt-1.5 mb-3 font-inter font-bold text-[16px] text-[#1A1A1A]">Produtos Cadastrados</h3>
              <p className="font-inter font-normal text-[11px] text-[#777777]">E em crescimento constante  com base CATMAT</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-dm-sans font-bold text-[48px] text-[#1AB0C3]">
                30-40x
              </h1>
              <h3 className="mt-1.5 mb-3 font-inter font-bold text-[16px] text-[#1A1A1A]">Redução de Tempo</h3>
              <p className="font-inter font-normal text-[11px] text-[#777777]">mais rápido que licitação tradicional</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-dm-sans font-bold text-[48px] text-[#1AB0C3]">
                3 dias
              </h1>
              <h3 className="mt-1.5 mb-3 font-inter font-bold text-[16px] text-[#1A1A1A]">Comprar e Receber</h3>
              <p className="font-inter font-normal text-[11px] text-[#777777]">vs. 90-120 dias no modelo tradicional</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-dm-sans font-bold text-[48px] text-[#1AB0C3]">
                Nacional
              </h1>
              <h3 className="mt-1.5 mb-3 font-inter font-bold text-[16px] text-[#1A1A1A]">Cobertura</h3>
              <p className="font-inter font-normal text-[11px] text-[#777777]">Orgãos públicos, Estatais, Sistema S entre outros</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center py-15">
        <div className="w-[80%] flex flex-col items-center justify-center">
          <h1 className="font-dm-sans font-bold text-[48px] text-[#1A1A1A]">Como Funciona</h1>
          <h4 className="font-inter font-normal text-lg text-[#555555] mb-16">Um processo transparente e eficiente que garante a melhor aplicação dos recursos públicos</h4>
          <Etapas usaBackground={true} etapas={etapas} usaIndex={true} />
          <div className="w-full h-[175px] flex items-center justify-center flex-col bg-white border border-[#E5E5E5] rounded-2xl mt-12">
            <h1 className="font-dm-sans font-bold text-[24px] text-[#111827]">Quer participar dos processos?</h1>
            <h4 className="font-inter font-normal text-[14px] text-[#6B7280]">Saiba como vender para os entes públicos e participar do novo conceito de Compras Públicas</h4>
            <div className="flex items-center justify-center gap-3 mt-4">
              <Button
              label="Ver Fornecedores Credenciados"
              variant="outlined-blue"
              />
              <Button
              label="Ver Fornecedores Credenciados"
              variant="outlined-neutral"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center py-15 bg-white">
        <div className="w-[80%] flex flex-col items-center justify-center">
          <h1 className="font-dm-sans font-bold text-[48px] text-[#1A1A1A]">Últimas Compras realizadas</h1>
          <h4 className="font-inter font-normal text-lg text-[#555555] mb-16">Os maiores processos de compras em execução ou recém-finalizados, com total transparência para a sociedade</h4>

          <div className="w-full flex items-center justify-center gap-4">
            <BuyCard/>
            <BuyCard/>
            <BuyCard/>
            {/* <LastBuyCard {...compras[0]}/>
            <LastBuyCard {...compras[1]}/>
            <LastBuyCard {...compras[2]}/> */}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center py-15 bg-[#E9F8F9]">
        <div className="w-[80%] flex flex-col items-center justify-center">
          <div className="w-full h-[528px] bg-white rounded-2xl flex flex-col justify-center items-center gap-8 p-6 shadow-[0px_3px_6px_0px_#4546461A]">
            <h1 className="font-inter font-semibold text-[40px] text-[#333333]">Perguntas frequentes</h1>
            <div className="w-full p-6 flex items-center justify-between border-b border-[#D4D4D4] rounded-2xl cursor-pointer">
              <span className="font-dm-sans font-medium text-[18px] leading-[120%] text-[#181A1F]">Quem pode vender no Marketplace do Governo?</span>
              <PiPlus className="w-8 h-8 text-[#333333]" />
            </div>
            <div className="w-full p-6 flex items-center justify-between border-b border-[#D4D4D4] rounded-2xl cursor-pointer">
              <span className="font-dm-sans font-medium text-[18px] leading-[120%] text-[#181A1F]">Como funciona o pagamento ao fornecedor?</span>
              <PiPlus className="w-8 h-8 text-[#333333]" />
            </div>
            <div className="w-full p-6 flex items-center justify-between border-b border-[#D4D4D4] rounded-2xl cursor-pointer">
              <span className="font-dm-sans font-medium text-[18px] leading-[120%] text-[#181A1F]">As compras são públicas e auditáveis?</span>
              <PiPlus className="w-8 h-8 text-[#333333]" />
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
}
