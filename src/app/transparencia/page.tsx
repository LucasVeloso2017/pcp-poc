import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
    icon: '/icon/Vector (9).png', // Assumindo que o último seja 'Vector.png'
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

    </main>
  );
}