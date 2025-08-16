import Image from 'next/image';
import React from 'react';

// Dados para a lista de features, para manter o código limpo
const features = [

  'Negociação em tempo real com ente comprador',
  'Avisos de licitações de baixa concorrência com IA',
  'Pedidos de impugnação de edital, dúvidas e esclarecimento',
  'Acesso ilimitado à nossa Escola de Licitações EAD',
  'Treinamento ao vivo para uso da plataforma com ambiente exclusivo de testes',
];

// Dados para a seção de estatísticas
const stats = [
  { value: 'R$ 10 BI', label: 'em oportunidades publicadas todo dia' },
  { value: '+2.800', label: 'compradores cadastrados' },
  { value: '+200', label: 'empresas vencedoras/dia' },
  { value: '+400', label: 'processos por dia' },
];

export default function Page() {
  return (
    <main className="w-[80%] py-12 md:py-18 space-y-12 ">
      <section>
        <h1 className="font-dm-sans text-[58px] leading-[130%] font-bold text-[#212529]">
          Encontre as melhores oportunidades <br /> para expandir o seu negócio
        </h1>
        <div className="flex flex-col space-y-4 mt-8">
          <div className="flex items-center space-x-3">
            <Image src="/icon/SealCheck.png" alt="Ícone de verificação" width={24} height={24} className="flex-shrink-0"/>
            <span className="font-dm-sans font-medium text-[24px] text-[#717171]">Homologação cadastral <strong className='text-black'>100% online e simplificada</strong></span>
          </div>
          <div className="flex items-center space-x-3">
            <Image src="/icon/SealCheck.png" alt="Ícone de verificação" width={24} height={24} className="flex-shrink-0"/>
            <span className="font-dm-sans font-medium text-[24px] text-[#717171]">Suporte via chat, telefone, whatsapp e email</span>
          </div>
          <div className="flex items-center space-x-3">
            <Image src="/icon/SealCheck.png" alt="Ícone de verificação" width={24} height={24} className="flex-shrink-0"/>
            <span className="font-dm-sans font-medium text-[24px] text-[#717171]">Gestão de processos online</span>
          </div>
          <div className="flex items-center space-x-3">
            <Image src="/icon/SealCheck.png" alt="Ícone de verificação" width={24} height={24} className="flex-shrink-0"/>
            <span className="font-dm-sans font-medium text-[24px] text-[#717171]">Negociação em tempo real com ente comprador</span>
          </div>
          <div className="flex items-center space-x-3">
            <Image src="/icon/SealCheck.png" alt="Ícone de verificação" width={24} height={24} className="flex-shrink-0"/>
            <span className="font-dm-sans font-medium text-[24px] text-[#717171]">Avisos de licitações de baixa concorrência com IA</span>
          </div>
          <div className="flex items-center space-x-3">
            <Image src="/icon/SealCheck.png" alt="Ícone de verificação" width={24} height={24} className="flex-shrink-0"/>
            <span className="font-dm-sans font-medium text-[24px] text-[#717171]">Pedidos de impugnação de edital, dúvidas e esclarecimento</span>
          </div>
          <div className="flex items-center space-x-3">
            <Image src="/icon/SealCheck.png" alt="Ícone de verificação" width={24} height={24} className="flex-shrink-0"/>
            <span className="font-dm-sans font-medium text-[24px] text-[#717171]">Acesso ilimitado à nossa Escola de Licitações EAD</span>
          </div>
          <div className="flex items-center space-x-3">
            <Image src="/icon/SealCheck.png" alt="Ícone de verificação" width={24} height={24} className="flex-shrink-0"/>
            <span className="font-dm-sans font-medium text-[24px] text-[#717171]">Treinamento ao vivo para uso da plataforma com ambiente exclusivo de testes</span>
          </div>
        </div>
      </section>
      <section className="mt-24">
        <h1 className="font-inter font-semibold text-5xl text-gray-800 mb-14">
          Somos facilitadores do seu sucesso em licitações
        </h1>

        <div className='w-full flex flex-col'>
          <div className='w-full h-56 rounded-t-[80px] bg-[#E9F8F9] flex items-center justify-center overflow-hidden'>
            <div className="grid grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`
                      text-center p-2
                      ${index < stats.length - 1 ? 'md:border-r' : ''}
                      border-gray-200
                    `}
                >
                  <p className="font-dm-sans text-5xl font-bold">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-[#00606C]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className='w-full h-4 bg-[#BBE8ED]'></div>
          <div className='w-full h-4 bg-[#5FC8D5]'></div>
          <div className='w-full h-4 bg-[#1AB0C3]'></div>
        </div>
      </section>
      <section className="mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-14">
          Venda+
        </h2>

        <p className='w-full font-dm-sans font-normal text-2xl text-[#717171]'>
          Nascemos para fazer a diferença no ecossistema de compras públicas e com isso desde 2016 temos o compromisso em ajudar na realização de processos licitatórios em todo o país. Durante todos esses anos, realizamos milhares de processos em nossa plataforma com total segurança, disponibilidade e suporte técnico.
          <br />
          <br />
          O Portal de Compras Públicas "Portal CP", é um centro de excelência em licitações públicas, um serviço oferecido de forma online, transparente, simples e seguro, mantido pela empresa Ecustomize Consultoria em Software S/A. O Portal foi feito para atender e facilitar a relação entre a organização pública, a sociedade e os empreendedores. Não utilizamos dinheiro público para manter a nossa operação, por isso, para manter tudo funcionando com excelência cobramos uma pequena taxa de ressarcimento do uso da plataforma. Saiba mais
          <strong className='font-bold text-[#1AB0C3] cursor-pointer'> clicando aqui.</strong>
        </p>
      </section>
    </main>
  );
}