import React from 'react';

// Componente reutilizável para os cards de documentação
const DocumentCard = ({ title, hasDownloadIcon = false }: { title: string, hasDownloadIcon?: boolean }) => (
  <div className="bg-gray-50 rounded-lg p-4 flex flex-col text-left h-full">
    <span className="bg-gray-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 self-start">
      Autenticado
    </span>
    {/* A margem inferior foi removida para um alinhamento mais preciso do botão */}
    <p className="text-gray-700 text-sm flex-grow">{title}</p>
    {hasDownloadIcon && (
      <div className="mt-auto self-end">
        {/* O ícone SVG foi substituído pela imagem .png */}
        <button className="bg-yellow-400 hover:bg-yellow-500 p-2 rounded-full">
            <img src="/icon/icon-download.png" alt="Ícone de Download" className="w-6 h-6" />
        </button>
      </div>
    )}
  </div>
);

export default function ComoFuncionaPage() {
  return (
    // Fundo da página ajustado para branco
    <main className="bg-white font-sans">
      {/* Imagem do cabeçalho */}
      <img
        src="/img/fluxograma-como-funciona.png"
        alt="Fluxograma explicando como aderir ao Portal de Compras Públicas"
        className="w-full h-auto"
      />

      {/* Seção "Preparar Documentação" com espaçamento externo */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        {/* Card que envolve o conteúdo da seção, agora sobre um fundo branco */}
        <div className="max-w-6xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
          {/* Título da Seção */}
          <div className="flex items-center gap-4 mb-4">
            <span className="flex-shrink-0 bg-gray-100 text-yellow-600 font-bold text-2xl py-2 px-4 rounded-md">1</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Preparar Documentação</h2>
          </div>
          <p className="text-gray-600 mb-10 md:ml-16">
            As empresas internacionais, que não funcionem no país, devem providenciar os equivalentes aos documentos brasileiros que seguem:
          </p>

          {/* Grid de Documentos 1 - Ajustado para 3 colunas em telas grandes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <DocumentCard title="Contrato social ou estatuto social" />
            <DocumentCard title="Ata da eleição da diretoria, se for o caso" />
            <DocumentCard title="Cartão do Cadastro Nacional de Pessoa Jurídica – CNPJ" />
            <DocumentCard title="Solicitação de cadastro Empresa Internacional e Termo de adesão" hasDownloadIcon={true} />
          </div>

          {/* Título do Representante Legal */}
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            Deverão ter um Representante Legal estabelecido no Brasil e providenciar:
          </h3>

          {/* Grid de Documentos 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <DocumentCard title="Carteira de identidade e CPF do representante legal ou CNH" />
            <DocumentCard title="Procuração do representante legal" />
            <DocumentCard title="Comprovante de residência do representante legal" />
          </div>
        </div>
      </section>
    </main>
  );
}
