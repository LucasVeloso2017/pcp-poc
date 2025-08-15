import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const regionalSupport = [
  {
    region: 'SC',
    phone: '(48) 3771-4672',
    description: 'Atendimento especializado para Santa Catarina',
  },
  {
    region: 'RS',
    phone: '(51) 3103-9615',
    description: 'Atendimento especializado para Rio Grande do Sul',
  },
  {
    region: 'DF',
    phone: '(61) 3120-3700 ou (61) 3142-4887',
    description: 'Atendimento especializado para Distrito Federal',
  },
];

export default function ContatoPage() {
  return (
    // O fundo cinza agora é a base da página
    <main className="min-h-screen bg-white">
      
      {/* Seção 1: Navegação (Breadcrumbs) com fundo branco */}
      
        <div className="container mx-auto px-4 py-4">
          
          <nav>
            <ol className="flex items-center space-x-4 text-sm text-gray-500">
              <li>
                <Link href="/" className="flex items-center">
                  {/* Tamanho aumentado de 20 para 36 */}
                  <Image src="/icon/Icon-Home.png" alt="Página Inicial" width={36} height={36} />
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Link href="/" className="flex items-center">
                <Image src="/icon/Icon-Contato.png" alt="Contato" width={60} height={48} />
                </Link>
                
                <span className="font-semibold text-gray-700"></span>
              </li>
            </ol>
          </nav>
        </div>
      

       {/* Espaçador para criar a margem branca acima e abaixo do card */}
      
        {/* O "card" centralizado com fundo cinza */}
        <section className="bg-[#F8F9FA] relative flex items-center lg:h-[808px]">
        
          {/* Container do grid */}
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
              
              {/* Coluna da Esquerda: Textos e Botão (com estilos corrigidos) */}
              <div className="space-y-6 max-w-lg text-center lg:text-left py-20 lg:py-0 mt-[-172px]">
                <h1 className="text-4xl lg:text-5xl font-bold text-[#333333] leading-tight">
                Fale com o Portal de Compras Públicas
                </h1>
                <p className="text-lg text-[#212529]">
                Estamos prontos para tirar suas dúvidas, ouvir suas sugestões e apoiar seu processo de compras públicas.
                </p>
                <p className="text-lg font-semibold text-[#212529]">
                Ajudar a melhorar o ecossistema de compras públicas é o nosso compromisso.
                </p>
                <div className="pt-4">
                <Link
                href="#"
                className="inline-block bg-[#035871] text-white uppercase font-bold text-sm px-10 py-4 rounded-full hover:bg-[#006064] transition-colors shadow-lg"
                >
                Entrar em contato
                </Link>
                </div>
              </div>
            {/* Coluna da Direita: Imagem da Mulher */}
            <div className="hidden lg:flex justify-center items-center h-[1550px]">
                {/* Adicionamos as classes de transform/translate aqui */}
                <div className="relative w-[745px] h-full transform -translate-x-36 translate-y-14">
                   <Image src="/img/mulher_portal.png" alt="Mulher sorrindo e usando um tablet" layout="fill" objectFit="contain" className="z-10" />
                </div>
              </div>
              
            </div>
          </div>
        
 <div className="absolute top-0 right-0 h-full w-[194px] hidden lg:block z-0">
          
          <div className="relative h-full w-full">

            {/* Imagem de Fundo (Rectangle2.png) */}
            <Image
              src="/img/Rectangle2.png"
              alt="Fundo decorativo do banner"
              layout="fill"
              objectFit="cover"
              aria-hidden="true"
            />

            
            <div className="absolute top-0 left-0 w-full h-[157px]">
              <Image
                src="/img/Rectangle1.png"
                alt="Topo decorativo do banner"
                layout="fill"
                objectFit="cover"
                aria-hidden="true"
              />
            </div>

          </div>
        </div>
      </section> 

      
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#343A40]">
              Telefones de Atendimento
            </h2>
            <p className="mt-4 text-lg text-[#6C757D] max-w-3xl">
              Entre em contato através dos nossos canais de atendimento especializados
            </p>

            {/* --- NOVO GRID DE 2 COLUNAS PARA OS CARDS --- */}
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              
              {/* Coluna 1: Card "Para todo Brasil" */}
              <div className="bg-[#E0F7FA] rounded-2xl p-5 shadow-sm overflow-hidden">
                <h3 className="text-2xl lg:text-3xl font-bold text-[#001411] mb-8">
                  Para todo Brasil
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0  rounded-full p-3">
                      <Image src="/icon/Icon-Phone.png" alt="Ícone de telefone" width={61} height={61} />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-[#001411]">Ligação local</span>
                      <p className="text-2xl font-bold text-[#0085AC]">3003-5455</p>
                      <span className="text-xs text-[#717171]">Atendimento geral para todo país</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0  rounded-full p-3">
                      <Image src="/icon/Icon-Phone.png" alt="Ícone de telefone" width={61} height={61} />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-[#001411]">Canal Gratuito</span>
                      <p className="text-2xl font-bold text-[#0085AC]">0800 730 5455</p>
                      <span className="text-xs text-[#717171]">Ligação gratuita para todo Brasil</span>
                    </div>
                  </div>
                </div>
                <div className="mt-10 relative h-[14px] bg-[#BBE8ED] rounded-full  w-full">
                  <div className="absolute top-0 left-0 h-full w-[87%] bg-[#0097A7] rounded-full"></div>
                </div>
              </div>

              {/* Coluna 2: Cards de Suporte Regional */}
              <div className="space-y-8">
                {regionalSupport.map((support) => (
                  <div key={support.region} className="bg-white rounded-2xl border border-[#D1EFF3] p-6 shadow-sm flex items-center justify-between overflow-hidden relative">
                    {/* Conteúdo da Esquerda */}
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 rounded-full p-3">
                        <Image src="/icon/Icon-Phone.png" alt="Ícone de telefone" width={61} height={61} />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-gray-600">Suporte Regional {support.region}</span>
                        <p className="text-xl font-bold text-gray-800">{support.phone}</p>
                        <span className="text-xs text-gray-500">{support.description}</span>
                      </div>
                    </div>
                    {/* Banner Decorativo da Direita */}
                    <div className="absolute top-0 right-0 h-full w-17">
                      <div className="h-2/3 bg-[#00ACC1]"></div>
                      <div className="h-1/3 bg-[#4DD0E1]"></div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
        </div>
      </section>
    </main>
  );
}