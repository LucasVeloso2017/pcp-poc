import React from 'react';

// Componente reutilizável para os cards de documentação
const DocumentCard = ({ title, hasDownloadIcon = false }: { title: string, hasDownloadIcon?: boolean }) => (
  <div className="bg-gray-50 rounded-lg p-4 flex flex-col text-left h-full">
    <span className="bg-gray-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 self-start">
      Autenticado
    </span>
    <p className="text-gray-700 text-sm flex-grow">{title}</p>
    {hasDownloadIcon && (
      <div className="mt-auto self-end">
        {/* Classes do botão alteradas para corresponder ao design */}
        <button className="bg-yellow-400 hover:bg-yellow-500 p-3 rounded-lg">
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

      {/* Seção 1: Preparar Documentação */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        {/* Card que envolve o conteúdo da seção */}
        <div className="max-w-6xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
          {/* Título da Seção */}
          <div className="flex items-center gap-4 mb-4">
            <img src="/icon/Number1.png" alt="Passo 3" className="h-10 w-auto" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Preparar Documentação</h2>
          </div>
          <p className="text-gray-600 mb-10 md:ml-16">
            As empresas internacionais, que não funcionem no país, devem providenciar os equivalentes aos documentos brasileiros que seguem:
          </p>

          {/* Grid de Documentos 1 */}
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

      
      {/* Seção 2: Enviar Documentos */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
          {/* Título da Seção */}
          <div className="flex items-center gap-4 mb-4">
            <img src="/icon/Number2.png" alt="Passo 2" className="h-10 w-auto" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Enviar Documentos</h2>
          </div>

          {/* Texto descritivo */}
          <p className="text-gray-600 mb-6 md:ml-16">
            Para validação e cadastro no Portal, os documentos providenciados devem ser enviados para o e-mail:
          </p>

          {/* Link de E-mail */}
          <div className="flex items-center gap-3 md:ml-16 mb-10">
             <img src="/icon/Envelope.png" alt="Ícone de e-mail" className="h-6 w-6" />
            <a href="mailto:fornecedor@portaldecompraspublicas.com.br" className="text-gray-800 font-medium hover:underline">
              fornecedor@portaldecompraspublicas.com.br
            </a>
          </div>
          
          {/* Caixa de Alerta */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-5 md:ml-16">
            {/* Imagem substitui o ícone e o texto "LEMBRE-SE:" */}
            <img 
              src="/img/Lembre-se_.png" 
              alt="Aviso Lembre-se" 
              className="h-6 mb-3" // h-6 define a altura e mb-3 cria um espaço abaixo
            />
            
            {/* Texto do alerta */}
            <p className="text-sm text-gray-700">
              Os documentos não podem estar vencidos ou com sua autenticação com <strong className="font-semibold">data superior a seis (6) meses</strong> e devem obedecer à legislação vigente, em especial ao que trata o <strong className="font-semibold">Art. 41 do Decreto nº 10.024/2019</strong> e o <strong className="font-semibold">inciso 4º, do Art. 32 da Lei 8.666/1993.</strong>
            </p>
          </div>
        </div>
      </section>

      
      {/* Seção 3: Acesso ao Portal */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
            {/* Título da Seção */}
            <div className="flex items-center gap-4 mb-4">
                <img src="/icon/Number3.png" alt="Passo 3" className="h-10 w-auto" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Acesso ao Portal</h2>
            </div>

            {/* Parágrafo Principal */}
            <p className="text-gray-600 mb-6 md:ml-16">
                Uma vez recebidos os documentos, o Portal de Compras Públicas <strong className="font-semibold text-gray-700">liberará o cadastro</strong> e serão enviados os <strong className="font-semibold text-gray-700">dados de acesso para o e-mail informado</strong>.
            </p> 

            {/* Parágrafo Secundário */}
            <p className="text-gray-600 mb-4 md:ml-16">
                De posse das informações, o Representante Legal deverá:
            </p>

            {/* Lista de Itens */}
            <ul className="list-disc list-inside space-y-2 mb-8 md:ml-16 text-gray-600">
                <li>Acessar a plataforma com o <strong className="font-semibold text-gray-700">cadastro gratuito</strong></li>
                <li>Adquirir uma assinatura referente ao ressarcimento dos custos de utilização de recursos de tecnologia da informação, previsto no <strong className="font-semibold text-gray-700">art. 5º da Lei nº 10.520/2002</strong></li>
            </ul>

            {/* Caixa de Sucesso */}
            
            <div className="flex items-center gap-3 md:ml-16 mb-10">
                {/* Ícone posicionado fora da caixa de fundo */}
                <div className="flex-shrink-0">
                    <img src="/icon/Frame.png" alt="Ícone de e-mail" className="h-6 w-6" />
                </div>
                {/* Caixa de fundo envolvendo apenas o texto */}
                <div className="bg-[#0BBC89]/2  rounded-lg p-4 flex-grow">
                    <p className="text-[22px] font-bold leading-[120%] text-gray-800">
                        Uma vez identificado o pagamento, a empresa terá acesso às licitações.
                    </p>
                </div>
            </div>

            {/* Caixa de Alerta "Atenção" */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-5 md:ml-16">
                
                    
                         <img 
                              src="/img/Atencao.png" // Assumindo que você tenha essa imagem
                              alt="Aviso Atenção" 
                              className="h-6 mb-3" 
                          />
                    
                    <div className="flex-grow">
                        <p className="text-sm text-gray-700">
                          Os procedimentos aqui descritos <strong className="font-semibold">restringem-se à liberação do uso do Portal de Compras Públicas</strong>, ficando a <strong className="font-semibold">cargo do órgão licitante todos os demais procedimentos</strong> previstos em edital e na legislação vigente.
                      </p>
                    </div>
                
            </div>
        </div>
      </section>
    </main>
  );
}