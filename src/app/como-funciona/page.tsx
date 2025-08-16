import Button from "@/components/Button";
import { PiDownloadSimple, PiEnvelope, PiMailbox } from "react-icons/pi";

export default function Page() {
  return (
    <div className="w-full bg-white">
      <div
        className="w-full h-[808px] bg-cover bg-right bg-no-repeat flex justify-center"
        style={{ backgroundImage: `url(/img/bg-hero-yellow.png)`, backgroundPosition: '86% center' }}
      >
        <div className="w-[80%] pt-18">
          <div className="w-[920px] flex flex-col">
            <p className="font-dm-sans font-bold text-[58px] text-[#333333] leading-16">
              Quero aderir ao <br />
              Portal de Compras Públicas
            </p>
            <p className="font-dm-sans font-normal text-[20px] text-[#212529] mt-4">
              Fazer um cadastro no Portal de Compras Públicas é muito fácil.<br />
              Confira o passo a passo logo abaixo.
            </p>
            <div className="flex items-center justify-center gap-[16px] mt-[88px]">
              <div className="w-full flex flex-col py-4 items-center justify-center bg-[#F7A622]/10 rounded-[8px]">
                <div className="w-8 h-8 bg-[#F7A622] rounded-[12px] flex items-center justify-center">
                  <span className="font-mono text-[#333333]">1</span>
                </div>
                <h1 className="font-dm-sans text-[16px] font-bold text-[#333333]">Preparar Documentação</h1>
                <p className="font-inter font-normal text-[12px] text-[#333333] text-center">
                  Organizar a documentação <br />
                  comercial necessária
                </p>
              </div>
              <div className="w-[100px] h-[2px] bg-[#F7A622]"></div>
              <div className="w-full flex flex-col py-4 items-center justify-center bg-[#F7A622]/10 rounded-[8px]">
                <div className="w-8 h-8 bg-[#F7A622] rounded-[12px] flex items-center justify-center">
                  <span className="font-mono text-[#333333]">2</span>
                </div>
                <h1 className="font-dm-sans text-[16px] font-bold text-[#333333]">Enviar Documentos</h1>
                <p className="font-inter font-normal text-[12px] text-[#333333] text-center">
                  Nossa equipe analisa e verifica <br />
                  suas informações
                </p>
              </div>
              <div className="w-[100px] h-[2px] bg-[#F7A622]"></div>
              <div className="w-full flex flex-col py-4 items-center justify-center bg-[#F7A622]/10 rounded-[8px]">
                <div className="w-8 h-8 bg-[#F7A622] rounded-[12px] flex items-center justify-center">
                  <span className="font-mono text-[#333333]">3</span>
                </div>
                <h1 className="font-dm-sans text-[16px] font-bold text-[#333333]">Acesso ao Portal</h1>
                <p className="font-inter font-normal text-[12px] text-[#333333] text-center">
                  Obtenha credenciais e comece <br />
                  a licitar contratos
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="w-full flex justify-center py-8">
        <div className="w-[80%] flex flex-col">
          <div className="w-full px-[178px] py-[48px] flex flex-col items-start justify-center bg-white rounded-xl shadow-lg">
            <div className="flex items-center justify-start gap-2">
              <div className="w-12 h-12 flex items-center justify-center bg-[#F9D18F] rounded-[12px]">
                <span className="font-mono text-[20px] text-[#181A1F]">1</span>
              </div>
              <h1 className="PrimriaH1">Preparar Documentação</h1>
            </div>
            <p className="mt-9 font-inter font-light text-[18px] text-[#333333]">As empresas internacionais, que não funcionem no país, devem providenciar os equivalentes aos documentos brasileiros que seguem:</p>
            <div className="mt-12 flex flex-wrap items-center gap-7">
              <DocumentCard title="Contrato social ou estatuto social" />
              <DocumentCard title="Ata da eleição da diretoria, se for o caso" />
              <DocumentCard title="Cartão do Cadastro Nacional de Pessoa Jurídica – CNPJ" />
              <DocumentCard title="Solicitação de cadastro Empresa Internacional e Termo de adesão" hasDownloadIcon={true} />
            </div>
            <h4 className="font-dm-sans font-bold text-[28px] text-[#333333] mt-[80px]">Deverão ter um Representante Legal estabelecido no Brasil e providenciar:</h4>
            <div className="w-full flex flex-wrap items-center justify-between gap-12 mt-12">
              <DocumentCard title="Carteira de identidade e CPF do representante legal ou CNH" />
              <DocumentCard title="Procuração do representante legal" />
              <DocumentCard title="Comprovante de residência do representante legal" />
            </div>
          </div>

          <div className="w-full px-[178px] mt-[104px] py-[48px] flex flex-col items-start justify-center bg-white rounded-xl shadow-lg">
            <div className="flex items-center justify-start gap-2">
              <div className="w-12 h-12 flex items-center justify-center bg-[#F9D18F] rounded-[12px]">
                <span className="font-mono text-[20px] text-[#181A1F]">2</span>
              </div>
              <h1 className="PrimriaH1">Enviar Documentos</h1>
            </div>
            <p className="mt-9 font-inter font-light text-[18px] text-[#333333]">Para validação e cadastro no Portal, os documentos providenciados devem ser enviados para o e-mail:</p>
            <div className="flex items-center justify-center gap-2 mt-[64px]">
              <PiEnvelope className="w-8 h-8" />
              <span className="font-dm-sans font-medium text-[16px] underline">fornecedor@portaldecompraspublicas.com.br</span>
            </div>
            <div className="w-full bg-orange-50 border border-[#F7A622] rounded-lg p-5 mt-[64px]">
              <h1 className="font-dm-sans font-bold text-[24px]">⚠️ Lembre-se:</h1>
              <p className="text-sm text-gray-700">
                Os documentos não podem estar vencidos ou com sua autenticação com <strong className="font-semibold">data superior a seis (6) meses</strong> e devem obedecer à legislação vigente, em especial ao que trata o <strong className="font-semibold">Art. 41 do Decreto nº 10.024/2019</strong> e o <strong className="font-semibold">inciso 4º, do Art. 32 da Lei 8.666/1993.</strong>
              </p>
            </div>
          </div>

          <div className="w-full px-[178px] mt-[104px] py-[48px] flex flex-col items-start justify-center bg-white rounded-xl shadow-lg">
            <div className="flex items-center justify-start gap-2">
              <div className="w-12 h-12 flex items-center justify-center bg-[#F9D18F] rounded-[12px]">
                <span className="font-mono text-[20px] text-[#181A1F]">3</span>
              </div>
              <h1 className="PrimriaH1">Acesso ao Portal</h1>
            </div>
            <p className="mt-9 font-inter font-light text-[18px] text-[#333333]">Uma vez recebidos os documentos, o Portal de Compras Públicas <strong className="font-semibold text-gray-700">liberará o cadastro</strong> e serão enviados os <strong className="font-semibold text-gray-700">dados de acesso para o e-mail informado</strong>.</p>

            <p className="text-gray-600 mb-4 mt-10">
              De posse das informações, o Representante Legal deverá:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-8 text-gray-600">
              <li>Acessar a plataforma com o <strong className="font-semibold text-gray-700">cadastro gratuito</strong></li>
              <li>Adquirir uma assinatura referente ao ressarcimento dos custos de utilização de recursos de tecnologia da informação, previsto no <strong className="font-semibold text-gray-700">art. 5º da Lei nº 10.520/2002</strong></li>
            </ul>

            <div className="w-full flex items-center gap-3 mt-[64px]">
              <span>✅</span>
              <div className="bg-green-50 text-[22px] font-bold leading-[120%] text-gray-800">
                Uma vez identificado o pagamento, a empresa terá acesso às licitações.
              </div>
            </div>

            <div className="w-full bg-orange-50 border border-[#F7A622] rounded-lg p-5 mt-[64px]">
              <h1 className="font-dm-sans font-bold text-[24px]">⚠️ Atenção:</h1>
              <p className="text-sm text-gray-700">
                Os procedimentos aqui descritos restringem-se à liberação do uso do Portal de Compras Públicas, ficando a cargo do órgão licitante todos os demais procedimentos previstos em edital e na legislação vigente.
              </p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}


const DocumentCard = ({ title, hasDownloadIcon = false }: { title: string, hasDownloadIcon?: boolean }) => (
  <div className="w-[372px] h-[114px] px-4 py-6 bg-gray-50 rounded-lg flex flex-col text-left relative">
    <div className="w-[90%]">
      <span className="bg-gray-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 self-start">
        Autenticado
      </span>
      <p className="text-gray-700 text-sm flex-grow">{title}</p>
    </div>
    {hasDownloadIcon && (
      <div className="absolute right-0 bottom-0">
        <button className="bg-[#F7A622] p-3 rounded-tl-[16px] rounded-br-[16px] cursor-pointer">
          <PiDownloadSimple className="w-6 h-6 text-[#333333]" />
        </button>
      </div>
    )}
  </div>
);