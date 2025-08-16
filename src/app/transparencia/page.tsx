import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  PiShoppingCart, 
  PiHourglassSimpleHigh,
  PiClockClockwise, 
  PiHandCoins,
  PiTruckTrailer,
  PiAcorn,
  PiFileText,
  PiChartLineUp,
  PiShieldCheck,
  PiChatCircleDots,
  PiPlugsConnected,
  PiCertificate,
  PiMagnifyingGlass,
  PiBell,
  PiChartBar,
  PiCode,
  PiCloud,
  PiCursorClick,
  PiChatsCircle,
  PiMedal,
  PiPhoneCall,
  PiHandPointing,
} from 'react-icons/pi';
// Array de dados para a seção de Compromissos
const commitments = [
  {
    icon: '/icon/Vector.png',
    title: 'Acesso Aberto à Informação',
    text: 'Toda a informação sobre as licitações realizadas por meio do Compras Públicas está disponível para acesso e download, sem necessidade de cadastro.',
  },
  {
    icon: '/icon/Vector (1).png',
    title: 'Rastreamento de Licitações',
    text: 'Disponibilizamos o acompanhamento completo para que o cidadão possa fiscalizar todo o processo licitatório, incluindo possíveis mudanças contratuais.',
  },
  {
    icon: '/icon/Vector (2).png',
    title: 'Integridade e Confiabilidade',
    text: 'Todos os dados são verificados e mantidos em uma plataforma com a mais alta tecnologia, garantindo um ambiente seguro e confiável para todas as partes envolvidas.',
  },
  {
    icon: '/icon/Vector (3).png',
    title: 'Atendimento Aberto e Eficiente',
    text: 'Nosso canal de atendimento está sempre preparado para atender com agilidade e transparência, garantindo que todas as informações sejam disponibilizadas de forma ágil e eficiente.',
  },
  {
    icon: '/icon/Vector (9).png',
    title: 'Integrações',
    text: 'Integrações nativas com o Transferegov.br (antigo Portal de Convênios do Governo Federal), para que todos os processos que utilizam recursos federais sejam fiscalizados.',
  },
  {
    icon: '/icon/Vector (8).png',
    title: 'Selos e Certificações de Qualidade',
    text: 'O Portal de Compras Públicas, preocupado com a segurança e qualidade dos serviços, possui certificações ISO 9001, ISO 27001 e ISO 27701, que mantêm a segurança da informação, a privacidade e a governança dos serviços da tecnologia.',
  },
  {
    icon: '/icon/Vector (3).png',
    title: 'Busca de Licitações',
    text: 'Filtros maleáveis por valor, data, nome ou alerta inteligente para encontrar a melhor oportunidade de negócio.',
  },
  {
    icon: '/icon/Vector (9).png',
    title: 'Notificações Personalizadas',
    text: 'Configure alertas para ser informado de novas licitações que correspondam às suas pesquisas e interesses.',
  },
  {
    icon: '/icon/Vector (8).png',
    title: 'Relatórios de Desempenho',
    text: 'Acompanhe relatórios detalhados e interativos de participação em licitações e concorrentes, para ajudar a aprimorar a sua competitividade.',
  },
  {
    icon: '/icon/Vector (9).png', 
    title: 'API de Dados Públicos',
    text: 'Informações disponibilizadas gratuitamente e machine-readable (para leitura por máquinas), em formato aberto, para que possam ser reutilizadas em aplicações de controle social e pesquisa.',
  }
];


export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Seção 1: Navegação (Breadcrumbs) */}
      <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="py-3">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="flex items-center justify-center p-2 rounded-md bg-cyan-100 hover:bg-cyan-200 transition-colors">
                  <Image src="/icon/Icon-Home.png" alt="Página Inicial" width={20} height={20} />
                </Link>
              </li>
              <li><span className="text-gray-400">/</span></li>
              <li>
                <span className="px-4 py-1.5 rounded-full bg-cyan-100 text-sm font-medium text-cyan-800">
                  Contato
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Seção 2: Card Principal (Hero) */}
      <div className="py-10 lg:py-16">
        <section className="container mx-auto bg-[#F8F9FA] relative flex items-center lg:h-[808px] overflow-hidden">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
              <div className="space-y-6 max-w-lg text-center lg:text-left py-20 lg:py-0">
                <h1 className="text-4xl lg:text-5xl font-bold text-[#343A40] leading-tight">
                  Fale com o Portal de Compras Públicas
                </h1>
                <p className="text-lg text-[#6C757D]">
                  Estamos prontos para tirar suas dúvidas, ouvir suas sugestões e apoiar seu processo de compras públicas.
                </p>
                <p className="text-lg font-semibold text-[#495057]">
                  Ajudar a melhorar o ecossistema de compras públicas é o nosso compromisso.
                </p>
                <div className="pt-4">
                  <Link href="#" className="inline-block bg-[#00838F] text-white uppercase font-bold text-sm px-10 py-4 rounded-full hover:bg-[#006064] transition-colors shadow-lg">
                    Entrar em contato
                  </Link>
                </div>
              </div>
              <div className="hidden lg:flex justify-center items-center h-[550px]">
                <div className="relative w-[450px] h-full transform -translate-x-36 translate-y-8">
                   <Image src="/img/mulher_portal.png" alt="Mulher sorrindo e usando um tablet" layout="fill" objectFit="contain" className="z-10" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 h-full w-[194px] hidden lg:block z-0">
            <div className="relative h-full w-full">
              <div className="absolute top-0 right-0 h-1/3 w-full bg-[#00ACC1]"></div>
              <div className="absolute top-1/3 right-0 h-2/3 w-full bg-[#4DD0E1]"></div>
            </div>
          </div>
        </section>
      </div> 

      {/* Seção de Responsabilidade Social */}
      <section className="relative bg-[#F8F9FA] rounded-t-[4rem] -mt-20 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#333333] mt-2">
              Responsabilidade Social
            </h1>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#333333] mt-2">
              Compromisso com:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-16">
            
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center rounded-[10px] bg-[#1AB0C3]/10 w-[61px] h-[61px] p-[18px]">
                <Image src="/icon/ListChecks.png" alt="Ícone de lista de checagem" width={32} height={32} />
              </div>
              <p className="mt-4 text-lg font-semibold text-[#333333] max-w-[296px] min-h-[46px] mx-auto">
                Publicação integral das compras públicas
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex items-center justify-center rounded-[10px] bg-[#1AB0C3]/10 w-[61px] h-[61px] p-[18px]">
                <Image src="/icon/LockKeyOpen.png" alt="Ícone de cadeado aberto" width={32} height={32} />
              </div>
              <p className="mt-4 text-lg font-semibold text-[#333333] max-w-[296px] min-h-[46px] mx-auto">
                Dados públicos acessíveis sem cadastro.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex items-center justify-center rounded-[10px] bg-[#1AB0C3]/10 w-[61px] h-[61px] p-[18px]">
                <Image src="/icon/ChatCircleText.png" alt="Ícone de balão de fala" width={32} height={32} />
              </div>
              <p className="mt-4 text-lg font-semibold text-[#333333] max-w-[296px] min-h-[46px] mx-auto">
                Consultas abertas à sociedade.
              </p>
            </div>

          </div>
        </div>
      </section>
     
      {/* Seção de Texto "Transparência"*/}
      <section className="bg-white py-16 lg:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-8">
            
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#333333]">
                Transparência
              </h1>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                O Portal de Compras Públicas, empresa de tecnologia do ramo governamental associada à ATCG (Associação de Tecnologia para Contratações Governamentais), tem como princípio chave a transparência.
              </p>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                No Portal de Compras Públicas, a transparência – além de um dos valores da instituição – é um dos pilares fundamentais que orienta todas as nossas atividades e serviços. Trabalhamos para garantir que cada processo licitatório seja realizado de transparente, conforme e justa, promovendo uma cultura de confiança e integridade em todas as interações.
              </p>
            </div>

            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-[#333333] w-[818px] h-[22px]">
                Nossa Missão com a Transparência
              </h3>
              <p className="mt-8 text-lg text-gray-600 leading-relaxed">
                Acreditamos que a transparência é essencial para um ambiente de compras públicas seguras. Por isso,segundo previsões legais, disponibilizamos informações detalhadas e precisas sobre todos os processos licitatórios, garantindo que tanto fornecedores quanto compradores tenham total visibilidade das etapas e requisitos.
              </p>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                No Portal de Compras Públicas, a transparência – além de um dos valores da instituição – é um dos pilares fundamentais que orienta todas as nossas atividades e serviços. Trabalhamos para garantir que cada processo licitatório seja realizado de transparente, conforme e justa, promovendo uma cultura de confiança e integridade em todas as interações.
              </p>
            </div>

          </div>
        </div>
      </section>
      
      {/* Seção "Compromissos de Transparência" */}
     <section className="bg-white pt-8 pb-16 lg:pb-20">
        <div className="container  px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl  mb-16 ">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#333333]">
              Compromissos de Transparência
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {commitments.map((item) => (
              <div key={item.title}>
                <div className="flex-shrink-0 mb-4"> {/* Adicionada margem inferior */}
                  <Image src={item.icon} alt={`Ícone para ${item.title}`} width={24} height={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800">{item.title}</h4>
                  <p className="text-gray-600 mt-2 text-sm">{item.text}</p>
                </div>
                 {/* Barra movida para o final do card principal */}
                <div className="mt-auto pt-4">
                  <div className="h-1 w-full bg-orange-200 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção "Transparência com Órgãos Públicos e Licitantes" */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-12">
            <h2 className="text-5xl font-semibold text-[#333333] leading-[64px] mb-6">
              Transparência com Órgãos Públicos e Licitantes
            </h2>
            <p className="text-2xl font-normal text-[#717171] leading-relaxed mb-8">
              O Portal de Compras Públicas tem como um de seus principais objetivos promover a transparência nas relações entre órgãos públicos e fornecedores. Sabemos que a clareza e o acesso à informação são fundamentais para garantir processos licitatórios justos, eficientes e em conformidade com a legislação vigente.
            </p>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-[#333333] mb-4">
              Como Promovemos a Transparência
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              O Portal de Compras Públicas tem como um de seus principais objetivos promover a transparência nas relações entre órgãos públicos e fornecedores. Sabemos que a clareza e o acesso à informação são fundamentais para garantir processos licitatórios justos, eficientes e em conformidade com a legislação vigente.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
            
            <div className="flex items-start p-[14px]">
              <div className="flex-shrink-0 mr-4">
                <div className="w-[61px] h-[61px] bg-yellow-100 rounded-full flex items-center justify-center">
                  <PiCloud className="w-8 h-8 text-yellow-600" />
                </div>
              </div>
              <div className="w-[637px] h-[50px]">
                <h4 className="font-bold text-lg text-gray-800 mb-2">Publicação Completa de Editais</h4>
                <p className="font-normal text-[14px] leading-[140%] text-[#717171] tracking-[0%] font-inter mb-[8px]">
                  Todos os editais de licitação são publicados integralmente no Portal, assegurando que as informações sejam acessíveis a qualquer cidadão ou empresa interessada. Detalhes como prazos, condições e requisitos são claramente especificados.
                </p>
              </div>
            </div>

            <div className="flex items-start p-[14px]">
              <div className="flex-shrink-0 mr-4">
                <div className="w-[61px] h-[61px] bg-yellow-100 rounded-full flex items-center justify-center">
                  <PiCloud className="w-8 h-8 text-yellow-600" />
                </div>
              </div>
              <div className="w-[637px] h-[50px]">
                <h4 className="font-bold text-lg text-gray-800 mb-2">Consultas Públicas</h4>
                <p className="font-normal text-[14px] leading-[140%] text-[#717171] tracking-[0%] font-inter mb-[8px]">
                  Todos os editais de licitação são publicados integralmente no Portal, assegurando que as informações sejam acessíveis a qualquer cidadão ou empresa interessada. Detalhes como prazos, condições e requisitos são claramente especificados.
                </p>
              </div>
            </div>

            <div className="flex items-start p-[14px]">
              <div className="flex-shrink-0 mr-4">
                <div className="w-[61px] h-[61px] bg-yellow-100 rounded-full flex items-center justify-center">
                  <PiCloud className="w-8 h-8 text-yellow-600" />
                </div>
              </div>
              <div className="w-[637px] h-[50px]">
                <h4 className="font-bold text-lg text-gray-800 mb-2">Conformidade com a Lei de Acesso à Informação (LAI)</h4>
                <p className="font-normal text-[14px] leading-[140%] text-[#717171] tracking-[0%] font-inter mb-[8px]">
                  Todos os editais de licitação são publicados integralmente no Portal, assegurando que as informações sejam acessíveis a qualquer cidadão ou empresa interessada. Detalhes como prazos, condições e requisitos são claramente especificados.
                </p>
              </div>
            </div>

            <div className="flex items-start p-[14px]">
              <div className="flex-shrink-0 mr-4">
                <div className="w-[61px] h-[61px] bg-yellow-100 rounded-full flex items-center justify-center">
                  <PiCloud className="w-8 h-8 text-yellow-600" />
                </div>
              </div>
              <div className="w-[637px] h-[50px]">
                <h4 className="font-bold text-lg text-gray-800 mb-2">Relatórios de Transparência</h4>
                <p className="font-normal text-[14px] leading-[140%] text-[#717171] tracking-[0%] font-inter mb-[8px]">
                  Todos os editais de licitação são publicados integralmente no Portal, assegurando que as informações sejam acessíveis a qualquer cidadão ou empresa interessada. Detalhes como prazos, condições e requisitos são claramente especificados.
                </p>
              </div>
            </div>

            <div className="flex items-start p-[14px]">
              <div className="flex-shrink-0 mr-4">
                <div className="w-[61px] h-[61px] bg-yellow-100 rounded-full flex items-center justify-center">
                  <PiCloud className="w-8 h-8 text-yellow-600" />
                </div>
              </div>
              <div className="w-[637px] h-[50px]">
                <h4 className="font-bold text-lg text-gray-800 mb-2">Combate à Corrupção</h4>
                <p className="font-normal text-[14px] leading-[140%] text-[#717171] tracking-[0%] font-inter mb-[8px]">
                  Todos os editais de licitação são publicados integralmente no Portal, assegurando que as informações sejam acessíveis a qualquer cidadão ou empresa interessada. Detalhes como prazos, condições e requisitos são claramente especificados.
                </p>
              </div>
            </div>

            <div className="flex items-start p-[14px]">
              <div className="flex-shrink-0 mr-4">
                <div className="w-[61px] h-[61px] bg-yellow-100 rounded-full flex items-center justify-center">
                  <PiCloud className="w-8 h-8 text-yellow-600" />
                </div>
              </div>
              <div className="w-[637px] h-[50px]">
                <h4 className="font-bold text-lg text-gray-800 mb-2">Portal Acessível e Inclusivo</h4>
                <p className="font-normal text-[14px] leading-[140%] text-[#717171] tracking-[0%] font-inter mb-[8px]">
                  Todos os editais de licitação são publicados integralmente no Portal, assegurando que as informações sejam acessíveis a qualquer cidadão ou empresa interessada. Detalhes como prazos, condições e requisitos são claramente especificados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção "Transparência com a sociedade" */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-8">
            
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-6">
                Transparência com a sociedade
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nossa plataforma também permite que qualquer cidadão acompanhe as contratações públicas, reforçando o papel do controle social na gestão dos recursos públicos. A participação cidadã é fundamental para garantir que as aquisições realizadas pelos órgãos públicos atendam ao interesse coletivo.
              </p>
            </div>

            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-[#333333] mb-4">
                Transparência com Órgãos de Controle
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                O Portal de Compras Públicas se compromete a manter uma relação de total transparência com os órgãos de controle, como tribunais de contas, controladorias e demais entidades fiscalizadoras. Reconhecemos a importância do controle externo na fiscalização das compras públicas, e trabalhamos para garantir que todos os processos licitatórios sejam conduzidos de acordo com as normas legais e regulamentares, facilitando a atuação desses órgãos e promovendo a eficiência no uso dos recursos públicos.
              </p>
            </div>

            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-[#333333] mb-4">
                Nosso Compromisso com a Fiscalização e Auditoria
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Entendemos que os órgãos de controle têm um papel essencial na garantia da legalidade, eficiência e moralidade dos processos de compra pública. Para facilitar esse trabalho, disponibilizamos informações detalhadas e acessíveis, garantindo total transparência nas atividades realizadas no Portal de Compras Públicas.
              </p>
            </div>

            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-[#333333] mb-8">
                Como Promovemos a Transparência com os Órgãos de Controle:
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                
                <div className="flex items-start p-[14px]">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-[61px] h-[61px] bg-yellow-100 rounded-full flex items-center justify-center">
                      <PiCloud className="w-8 h-8 text-yellow-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800 mb-2">Acesso Completo e em Tempo Real</h4>
                    <p className="font-normal text-[14px] leading-[140%] text-[#717171] tracking-[0%] font-inter mb-[8px]">
                      Órgãos de controle têm acesso em tempo real a todas as informações e documentos relacionados aos processos licitatórios conduzidos na plataforma dos nossos clientes, desde as análises iniciais, até lances ordens cronograma, além de avaliação dos propostas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-[14px]">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-[61px] h-[61px] bg-yellow-100 rounded-full flex items-center justify-center">
                      <PiCloud className="w-8 h-8 text-yellow-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800 mb-2">Relatórios Detalhados de Auditoria</h4>
                    <p className="font-normal text-[14px] leading-[140%] text-[#717171] tracking-[0%] font-inter mb-[8px]">
                      Oferecemos ferramentas que permitem a geração de relatórios detalhados em tempo real de atividades realizadas incluem a histórico completo de cada licitação, desde sua concepção até a conclusão, garantindo que todos os passos possam ser auditados de forma eficaz.
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-[14px]">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-[61px] h-[61px] bg-yellow-100 rounded-full flex items-center justify-center">
                      <PiCloud className="w-8 h-8 text-yellow-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800 mb-2">Transparência em Contratos e Execução</h4>
                    <p className="font-normal text-[14px] leading-[140%] text-[#717171] tracking-[0%] font-inter mb-[8px]">
                      Disponibilizamos informações completas sobre a execução contratual, incluindo prazos, contratos, bem como o acompanhamento da execução contratual. Isso inclui preços, valores pagos e outras informações necessárias para a fiscalização do correto aplicação dos recursos públicos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-[14px]">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-[61px] h-[61px] bg-yellow-100 rounded-full flex items-center justify-center">
                      <PiCloud className="w-8 h-8 text-yellow-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800 mb-2">Conformidade com a Legislação</h4>
                    <p className="font-normal text-[14px] leading-[140%] text-[#717171] tracking-[0%] font-inter mb-[8px]">
                      Todos os nossos processos são desenvolvidos em rigorosa conformidade com a legislação em vigor, facilitando para qualquer tribunal de contas acompanhar e certificar as ações das informações dos órgãos de controle.
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-[14px]">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-[61px] h-[61px] bg-yellow-100 rounded-full flex items-center justify-center">
                      <PiCloud className="w-8 h-8 text-yellow-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800 mb-2">Mecanismos de Prevenção e Detecção de Irregularidades</h4>
                    <p className="font-normal text-[14px] leading-[140%] text-[#717171] tracking-[0%] font-inter mb-[8px]">
                      Utilizamos tecnologias que ajudam a identificar possíveis irregularidades ou inconformidades nos processos licitatórios. Qualquer indício de subfaturação ou manutenção é imediatamente reportado aos órgãos competentes para que seja investigado e solucionado.
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-[14px]">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-[61px] h-[61px] bg-yellow-100 rounded-full flex items-center justify-center">
                      <PiCloud className="w-8 h-8 text-yellow-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800 mb-2">Facilidade de Acesso à Informação</h4>
                    <p className="font-normal text-[14px] leading-[140%] text-[#717171] tracking-[0%] font-inter mb-[8px]">
                      Órgãos de controle têm acesso facilitado às informações e relatórios através do nosso plataforma, com interfaces integradas que permitem a visualização, download e análise dos dados relevantes de forma rápida e eficiente.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-[#333333] mb-4">
                Cooperação e Transparência para o Combate à Fraude
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                A transparência é uma ferramenta poderosa no combate à fraude e à corrupção. Ao garantir que todas as informações sobre as licitações sejam visíveis às auditorias pelos órgãos de controle, reforçamos nosso compromisso com a legalidade e com a moralidade na gestão dos recursos públicos. Trabalhamos em colaboração com essas entidades para assegurar que qualquer prática irregular seja prontamente identificada e corrigida.
              </p>
            </div>
          </div>
        </div>
      </section>


            {/* Seção "Transparência e a cobrança do serviço" */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-6">
              Transparência e a cobrança do serviço
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              A cobrança pelos nossos serviços segue determinações legais e está em conformidade com o acórdão 1121/2023 do TCU, o qual garante o direito à cobrança por participação única no processo licitatório. Nossos custos operacionais são fundamentais para a manutenção da ferramenta e time, e incluem:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            <div className="text-left">
              <div className="mb-4">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <PiFileText className="w-5 h-5 text-yellow-600" />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-800 mb-2">Manutenção e Desenvolvimento Tecnológico</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Investimos constantemente em tecnologias inovadoras para garantir que o sistema esteja sempre em pleno funcionamento. Nosso compromisso inclui servidor a todas os usuários.
                </p>
                <div className="h-1 w-full bg-orange-300 rounded-full"></div>
              </div>
            </div>

            <div className="text-left">
              <div className="mb-4">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <PiCursorClick className="w-5 h-5 text-yellow-600" />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-800 mb-2">Suporte e Atendimento Especializado</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Oferecemos uma equipe de suporte dedicada e qualificada, pronta para auxiliar tanto fornecedores quanto órgãos públicos em todas as etapas do processo licitatório. Esse atendimento personalizado assegura que qualquer dúvida seja esclarecida em tempo hábil, necessária para navegar com tranquilidade pelos processos de licitação.
                </p>
                <div className="h-1 w-full bg-orange-300 rounded-full"></div>
              </div>
            </div>

            <div className="text-left">
              <div className="mb-4">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <PiChatsCircle className="w-5 h-5 text-yellow-600" />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-800 mb-2">Segurança da Informação</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Trabalhamos com protocolos de segurança de todos os níveis, garantindo que as informações de todos os participantes sejam protegidas contra qualquer invasão ou documentos e consultas ou invasões de terceiros. Nossa equipe de segurança possui algumas das melhores tecnologias de cibersegurança para manter o ambiente licitatório confiável e transparente.
                </p>
                <div className="h-1 w-full bg-orange-300 rounded-full"></div>
              </div>
            </div>

            <div className="text-left">
              <div className="mb-4">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <PiShieldCheck className="w-5 h-5 text-yellow-600" />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-800 mb-2">Conformidade Legal e Regulatória</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Investimentos para garantir que todos os nossos processos e a plataforma estejam em total conformidade com as legislações aplicáveis, incluindo as mais recentes atualizações e regulamentações governamentais.
                </p>
                <div className="h-1 w-full bg-orange-300 rounded-full"></div>
              </div>
            </div>

            <div className="text-left">
              <div className="mb-4">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <PiMedal className="w-5 h-5 text-yellow-600" />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-800 mb-2">Capacitação e Melhoria Contínua</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Oferecemos treinamento e materiais educativos para que nossos usuários possam tirar o máximo proveito da plataforma e dos nossos serviços. Promovemos webinars, cursos e palestras que incluem cursos, webinars e materiais de apoio que auxiliam tanto fornecedores quanto órgão públicos a aproveitar sua ferramenta nas licitações.
                </p>
                <div className="h-1 w-full bg-orange-300 rounded-full"></div>
              </div>
            </div>

            <div className="text-left">
              <div className="mb-4">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <PiChartLineUp className="w-5 h-5 text-yellow-600" />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-800 mb-2">Customização da ferramenta</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Ao atendimento que o Brasil tem legislações das mais diversas determinamos o especialização nas primeiras funcionários de cada região. Isso inclui integração dos sistemas existentes, relativamente customizações necessárias aos entre públicos para que suas rotinas de trabalho não tenham conflitualidade caso as legislações.
                </p>
                <div className="h-1 w-full bg-orange-300 rounded-full"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Seção "Transparência e Uso de Dados" */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-8">
            
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-6">
                Transparência e Uso de Dados
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                No Portal de Compras Públicas, a transparência no uso de dados é uma prioridade. Coletamos e utilizamos informações de forma responsável, sempre em conformidade com a legislação aplicável, incluindo a Lei Geral de Proteção de Dados (LGPD).
              </p>
            </div>

            <div>
              <p className="text-lg text-gray-600 leading-relaxed">
                A <span className="text-blue-600 underline">Política de Privacidade</span> garante que todos os dados fornecidos sejam utilizados exclusivamente para melhorar a experiência do usuário, facilitar a participação em licitações e manter a segurança dos processos. Não compartilhamos dados pessoais de terceiros sem consentimento, exceto quando exigido por lei.
              </p>
            </div>

            <div>
              <p className="text-lg text-gray-600 leading-relaxed">
                A <span className="text-blue-600 underline">Política de Cookies</span> explica como utilizamos cookies para otimizar o funcionamento do site, personalizar conteúdos e oferecer uma navegação mais eficiente. Os usuários podem gerenciar suas preferências a qualquer momento, controlando quais cookies desejam permitir. Nosso compromisso é oferecer uma plataforma segura e transparente, onde o uso de dados pessoais é tratado com o máximo cuidado e respeito.
              </p>
            </div>

          </div>
        </div>
      </section>


            {/* Seção "Comprometidos com a Transparência e a Ética" */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-6">
              Comprometidos com a Transparência e a Ética
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                Estamos comprometidos em manter um ambiente de negócios ético e transparente, contribuindo para o fortalecimento das relações entre compradores e fornecedores. Nossa atuação é guiada pelas melhores práticas de governança e conformidade, sempre priorizando a confiança mútua.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Somos apoiadores e patrocinadores da RGB (Rede Governança Brasil). Acreditamos integralmente na ideia de criar alianças em prol da Governança na esfera pública.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Canal de Denúncias</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                O Portal de Compras Públicas mantém um canal seguro e sigiloso para relatar práticas inadequadas, fraudes, irregularidades ou violações legais. As denúncias podem ser feitas pelo e-mail <span className="text-blue-600 underline">portaloetica.com.br/portaldecompraspublicas</span>, pelo canal <span className="text-blue-600 underline">https://oetica.com.br/portaldecompraspublicas</span> ou diretamente na nossa central e são tratadas com seriedade e análise imparcial, reforçando nosso compromisso com a ética, a transparência e a confiança entre compradores e fornecedores.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
                    <PiPhoneCall className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">3003-5455 (24h)</p>
                    <p className="text-blue-600 text-sm underline">denuncias@portaldecompraspublicas.com.br (validar)</p>
                  </div>
                </div>
              </div>
              
              <div className="h-2 w-full bg-orange-300 rounded-full"></div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Relação com a imprensa</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Prezamos pelo diálogo aberto com a imprensa, oferecendo informações claras e precisas sobre nossas atividades e processos. Nosso setor de comunicação está disponível para atender solicitações pelo e-mail abaixo, fortalecendo a transparência e a integridade em nossas ações.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
                    <PiHandPointing className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-blue-600 text-sm underline">comunicacao@portaldecompraspublicas.com.br</p>
                  </div>
                </div>
              </div>
              
              <div className="h-2 w-full bg-orange-300 rounded-full"></div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}