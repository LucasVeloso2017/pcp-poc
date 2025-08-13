'use client';
import React from 'react';
const Footer = () => {

  return (
    <>
      <div className='w-full h-[1172px] bg-app-blue-500 flex justify-center py-18'>
        <div className='w-[80%]'>
          <div className="w-full justify-between pb-10 border-b [border-bottom-style:solid] border-white flex items-center">
            <img src='/img/logo2.png' alt='logo' className='w-[200px] sm:w-[200px]' />
            <div className="inline-flex items-center gap-4 ">
              <div className="w-10 h-10 justify-center bg-app-blue-100 rounded-full flex items-center">
                <img src="/icon/Instagram.png" className='cursor-pointer' />
              </div>
              <div className="w-10 h-10 justify-center bg-app-blue-100 rounded-full flex items-center">
                <img src="/icon/Facebook.png" className='cursor-pointer' />
              </div>
              <div className="w-10 h-10 justify-center bg-app-blue-100 rounded-full flex items-center">
                <img src="/icon/Youtube.png" className='cursor-pointer' />
              </div>
              <div className="w-10 h-10 justify-center bg-app-blue-100 rounded-full flex items-center">
                <img src="/icon/Linkedin.png" className='cursor-pointer' />
              </div>
              <div className="w-10 h-10 justify-center bg-app-blue-100 rounded-full flex items-center">
                <img src="/icon/Tiktok.png" className='cursor-pointer' />
              </div>
              <div className="w-10 h-10 justify-center bg-app-blue-100 rounded-full flex items-center">
                <img src="/icon/Whatsapp.png" className='cursor-pointer' />
              </div>
            </div>
          </div>

          <div className='w-full mt-8 flex flex-col pb-8 items-center gap-12 border-b [border-bottom-style:solid] border-white'>
            <h1 className='font-inter font-extrabold text-3xl text-white'>Parceiros</h1>
            <div className='w-full flex items-center justify-between'>
              <img src="/img/partners/partner1.png" />
              <img src="/img/partners/partner4.png" />
              <img src="/img/partners/partner2.png" />
              <img src="/img/partners/partner3.png" />
              <img src="/img/partners/partner5.png" />
            </div>
            <div className='w-235 flex justify-center items-center gap-4'>
              <img src="/img/partners/partner6.png" className='w-[180px]' alt="" />
              <span className='font-inter font-normal text-[10px] text-white'>O Portal de Compras Públicas é associado à ATCG (Associação de Tecnologia e Compras Governamentais), reforçando seu compromisso com a transparência, inovação e boas práticas no setor público. Atuamos em conformidade com a legislação vigente, com processos e soluções alinhados às exigências legais e regulatórias. Link de Acesso: Documentos - Associação das Empresas de Tecnologia para Contratações Governamentais</span>
            </div>
          </div>

          <div className='w-full mt-8 pb-16 flex flex-col items-center gap-12 border-b [border-bottom-style:solid] border-white'>
            <h1 className='font-inter font-extrabold text-3xl text-white'>Nossas soluções premiadas</h1>
            <div className='w-full flex items-center justify-between'>
              <img src="/img/certs/iso.png" />
              <img src="/img/certs/bndes.png" />
              <img src="/img/certs/gov-tech.png" />
              <img src="/img/certs/startout.png" />
              <img src="/img/certs/cert-etica.png" />
              <img src="/img/certs/gptw.png" />
            </div>
          </div>
          <div className='w-full mt-8 pb-18 flex items-center justify-between'>
            <div className='flex flex-col items-start justify-start gap-4'>
              <h1 className='font-inter font-extrabold text-3xl text-white'>Central de Atendimento</h1>
              <p className='font-inter text-xs leading-7 text-white'>
                Capitais, Regiões Metropolitanas e WhatsApp: <strong>3003-5455</strong><br />
                Demais Regiões: <strong>0800 730 5455</strong><br />
                Região Sul: <strong>(48) 3771-4672 | (51) 3103-9615</strong><br />
                Brasília: <strong>(61) 3120-3700 | (61) 3142-4887</strong><br />
                Atendimento de segunda a sexta, das 8h às 18h (horário de Brasília), exceto feriados.
              </p>
            </div>
            <div className='flex flex-col gap-6'>
              <div className="text-white flex items-center gap-6 p-4 rounded-lg">
                <img src="/img/logoMini.png" alt="" />
                <div>
                  <h3 className="font-inter font-extrabold text-lg">Quer vender para o governo? </h3>
                  <p className="font-inter text-sm underline">fornecedor@portaldecompraspublicas.com.br</p>
                </div>
              </div>
              <div className="text-white flex items-center gap-6 p-4 rounded-lg">
                <img src="/img/logoMini.png" alt="" />
                <div>
                  <h3 className="font-inter font-extrabold text-lg">É ente público? </h3>
                  <p className="font-inter text-sm underline">comprador@portaldecompraspublicas.com.br</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full bg-app-blue-550 flex justify-center py-18'>
        <div className='w-[80%]'>
            <div className="w-full container flex justify-center gap-16 text-sm pb-10 border-b [border-bottom-style:solid] border-white ">
              <div className="flex flex-col space-y-1">
                <h4 className="font-inter text-lg font-semibold text-app-brand-secondary-100">Processos</h4>
                <a href="#" className="text-white">Encontre</a>
                <br />
                <h4 className="font-inter text-lg font-semibold text-app-brand-secondary-100">Cadastre-se</h4>
                <a href="#" className="text-white">Fornecedor</a>
                <a href="#" className="text-white">Comprador</a>
                <a href="#" className="text-white">Consultor</a>
                <a href="#" className="text-white">Internacional</a>
              </div>

              <div className="flex flex-col space-y-1">
                <h4 className="font-inter text-lg font-semibold text-app-brand-secondary-100">Aprenda</h4>
                <br />
                <h4 className="font-inter text-lg font-semibold text-app-brand-secondary-100">Novidades</h4>
                <a href="#" className="text-white ">Notícias e Parcerias</a>
                
              </div>

              <div className="flex flex-col space-y-1">
                <h4 className="font-inter text-lg font-semibold text-app-brand-secondary-100">Documentos</h4>
                <a href="#" className="text-white ">Encontre</a>
                <br />
                <h4 className="font-inter text-lg font-semibold text-app-brand-secondary-100">Blog</h4>
                <a href="#" className="text-white ">Encontre</a>
              </div>

              <div className="flex flex-col space-y-1">
                <h4 className="font-inter text-lg font-semibold text-app-brand-secondary-100">Sobre</h4>
                <a href="#" className="text-white ">O Portal</a>
                <a href="#" className="text-white ">Por que cobramos?</a>
                <a href="#" className="text-white ">Legislação</a>
                <a href="#" className="text-white ">Parceiros</a>
                <a href="#" className="text-white ">Depoimentos</a>
                <a href="#" className="text-white ">Política de Privacidade</a>
                <a href="#" className="text-white ">Política de Cookies</a>
              </div>

              <div className="flex flex-col space-y-1">
                <h4 className="font-inter text-lg font-semibold text-app-brand-secondary-100">Contato</h4>
                <a href="#" className="text-white ">Atendimento</a>
                <a href="#" className="text-white ">Trabalhe Conosco</a>
              </div>
            </div>
            <div className='w-full text-center flex flex-col gap-2 pt-15'>
              <span className='text-white font-inter font-normal text-xs'>SIA Trecho 17, Rua 20, Lote 90 – 2º andar, Brasília/DF – CEP 71.200-256</span>
              <span className='text-white font-inter font-normal text-xs'>© 2025 Portal de Compras Públicas. Todos os direitos reservados</span>
              <span className='text-white font-inter font-normal text-xs'>CNPJ: 09.397.355/0001-30 – Ecustomize Consultoria em Software S/A</span>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
