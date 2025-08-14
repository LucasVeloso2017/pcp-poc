import Image from 'next/image';
import React from 'react';




// Dados para a lista de features, para manter o código limpo
const features = [
  'Homologação cadastral 100% online e simplificada',
  'Suporte via chat, telefone, whatsapp e email',
  'Gestão de processos online',
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

export default function App() {
  return (
    // O fundo branco principal
    <main className="bg-white font-sans">
      {/* Container principal que centraliza o conteúdo e adiciona padding lateral */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Wrapper para as seções*/}
        <div className="mx-auto space-y-12">

          {/* Seção 1: Lista de Oportunidades - Borda removida */}
          <section className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 max-w-2xl">
              Encontre as melhores oportunidades para expandir o seu negócio
            </h1>
             <ul className="flex flex-col space-y-4 mt-8 max-w-2xl">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <Image
                    src="/icon/SealCheck.png" // Caminho relativo à pasta `public`
                    alt="Ícone de verificação"
                    width={24} // Obrigatório: Largura do ícone em pixels (h-6 w-6 = 24px)
                    height={24} // Obrigatório: Altura do ícone em pixels
                    className="flex-shrink-0" // Classes de layout ainda funcionam
                  />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Seção 2: Estatísticas */}
          <section className="space-y-8"> {/* Adicionado space-y-8 para espaçar o título do card */}

            {/* TÍTULO DE VOLTA, ALINHADO À ESQUERDA */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Somos facilitadores do seu sucesso em licitações
            </h1>
            
            {/* CARD COM FUNDO BRANCO E SOMBRA */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            
              {/* Grid para os itens de estatística */}
              <div className="grid grid-cols-1 md:grid-cols-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`
                      text-center p-8
                      ${index < stats.length - 1 ? 'md:border-r' : ''}
                      border-gray-200 {/* Cor da borda ajustada para cinza claro */}
                    `}
                  >
                    {/* Cores do texto ajustadas para tons de cinza padrão */}
                    <p className="text-4xl font-bold text-stats-value">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-stats-label">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Seção 3: Venda+ */}
          <section className="p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Venda+
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Nascemos para fazer a diferença no ecossistema de compras públicas e com isso desde 2016 temos o compromisso em ajudar na realização de processos licitatórios em todo o país. Durante todos esses anos, realizamos milhares de processos em nossa plataforma com total segurança, disponibilidade e suporte técnico.
              </p>
              <p>
                O Portal de Compras Públicas "Portal CP", é um centro de excelência em licitações públicas, um serviço oferecido de forma online, transparente, simples e seguro, mantido pela empresa Ecustomiza Consultoria em Software S/A. O Portal foi feito para atender e facilitar a relação entre a organização pública, a sociedade e os empreendedores. Não utilizamos dinheiro público para manter a nossa operação, por isso, para manter tudo funcionando com excelência, cobramos uma pequena taxa de assinamento do uso da plataforma. Saiba mais {' '}
                <a href="#" className="text-blue-600 hover:underline font-semibold">
                  clicando aqui.
                </a>
              </p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
