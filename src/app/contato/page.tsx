import Button from "@/components/Button";
import { PiPhoneCall } from "react-icons/pi";

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


export default function Page() {
  return (
    <div className="w-full bg-white">
      <div
        className="w-full h-[808px] bg-cover bg-right bg-no-repeat flex justify-center"
        style={{ backgroundImage: `url(/img/bg-hero-contact.png)`, backgroundPosition: '86% center' }}
      >
        <div className="w-[80%] pt-48">
          <div className="w-[920px] flex flex-col">
            <p className="font-dm-sans font-bold text-[58px] text-[#333333] leading-16">
              Fale com o Portal <br /> de Compras Públicas
            </p>
            <p className="font-dm-sans font-normal text-[20px] text-[#212529] mt-4">
              Estamos prontos para tirar suas dúvidas, ouvir suas sugestões e apoiar <br />
              seu processo de compras públicas.
            </p>
            <p className="font-dm-sans font-bold text-[20px] text-[#212529] mt-10">
              Ajudar a melhorar o ecossistema de compras públicas <br />
              é o nosso compromisso.
            </p>
            <div className="w-[400px] mt-10">
              <Button
                className="w-[400px]"
                label="entrar em contato"
                variant="blue"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center py-8">
        <div className="w-[80%] flex flex-col">
          <h1 className="font-inter font-bold text-[48px] text-[#333333]">Telefones de Atendimento</h1>
          <h4 className="font-dm-sans font-normal text-[24px] text-[#717171] mt-4">
            Entre em contato através dos nossos canais de atendimento especializados
          </h4>
          <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-4 lg:gap-6 mt-8 md:mt-12 lg:mt-[60px] px-4 lg:px-0">
            <div className="w-full lg:w-auto">
              <div className="bg-[#E9F8F9] rounded-t-[20px] p-4 md:p-6 lg:p-8">
                <h3 className="font-dm-sans font-semibold text-2xl md:text-3xl lg:text-[34px] text-[#333333] mb-8 lg:mb-14">
                  Para todo Brasil
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="flex-shrink-0 rounded-full p-2 md:p-3">
                      <PiPhoneCall className="w-6 h-6 md:w-8 md:h-8 text-[#0085AC]" />
                    </div>
                    <div>
                      <span className="text-xs md:text-sm font-semibold text-[#001411]">Ligação local</span>
                      <p className="text-xl md:text-2xl font-bold text-[#0085AC]">3003-5455</p>
                      <span className="text-xs text-[#717171]">Atendimento geral para todo país</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="flex-shrink-0 rounded-full p-2 md:p-3">
                      <PiPhoneCall className="w-6 h-6 md:w-8 md:h-8 text-[#0085AC]" />
                    </div>
                    <div>
                      <span className="text-xs md:text-sm font-semibold text-[#001411]">Canal Gratuito</span>
                      <p className="text-xl md:text-2xl font-bold text-[#0085AC]">0800 730 5455</p>
                      <span className="text-xs text-[#717171]">Ligação gratuita para todo Brasil</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="w-[80%] h-3.5 bg-[#1AB0C3]" />
                <div className="w-[20%] h-3.5 bg-[#BBE8ED]" />
              </div>
            </div>

            <div className="w-auto space-y-4 md:space-y-6 lg:space-y-8">
              {regionalSupport.map((support) => (
                <div key={support.region} className="w-full bg-white rounded-2xl border border-[#D1EFF3] px-3 py-4  flex flex-col sm:flex-row items-start sm:items-center justify-between overflow-hidden relative">
                  <div className="flex items-center gap-3 md:gap-4 w-full mr-10">
                    <PiPhoneCall className="w-6 h-6 md:w-8 md:h-8 text-[#0085AC]" />
                    <div className="flex-1">
                      <span className="font-dm-sans text-base md:text-lg lg:text-[18px] font-semibold text-[#333333] block">
                        Suporte Regional {support.region}
                      </span>
                      <p className="font-dm-sans text-xl md:text-3xl lg:text-[18px] font-bold text-[#0085AC]">
                        {support.phone}
                      </p>
                      <span className="text-xs text-gray-500">{support.description}</span>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 h-full w-10">
                    <div className="h-[80%] bg-[#00ACC1]"></div>
                    <div className="h-[20%] bg-[#4DD0E1]"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
