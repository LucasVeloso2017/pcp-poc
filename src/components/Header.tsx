'use client';
import React, { useEffect, useState } from 'react';
import { FiInfo, FiPhoneCall, FiPlusCircle, FiUser } from 'react-icons/fi';
import Button from './Button';
import styled from 'styled-components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TabsWrapper = styled.div`
  .active {
    a {
      position: relative;
      font-weight: 600;
    }
    a::before {
      content: '';
      position: absolute;
      bottom: 0;
      top: 50px;
      width: 100%;
      height: 2px;
      background-color: var(--app-brand-secondary-100);
    }
  }
`;

const Header = () => {
  const [currentPath, setCurrentPath] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  const pages = [
    {
      label: 'Compras Públicas',
      href: '/compras-publicas',
      active: currentPath.includes('compras-publicas'),
    },
    {
      label: 'Venda no Marketplace',
      href: '/venda-marketplace',
      active: currentPath.includes('venda-marketplace'),
    },
    {
      label: 'Fornecedores',
      href: '/fornecedores',
      active: currentPath.includes('fornecedores'),
    },
    {
      label: 'Como Funciona',
      href: '/como-funciona',
      active: currentPath.includes('como-funciona'),
    },
    {
      label: 'Transparência',
      href: '/transparencia',
      active: currentPath.includes('transparencia'),
    },
    {
      label: 'Contato',
      href: '/contato',
      active: currentPath.includes('contato'),
    },
  ];

  return (
    <>
      <div className='w-full h-[64px] py-2 flex justify-center items-center bg-app-blue-500-10'>
        <div className='w-[90%] md:w-[80%] flex items-center justify-between'>
          <div className='flex items-center justify-center gap-2'>
            <FiPhoneCall className='w-[22px] h-[22px] text-app-brand-primary-100' />
            <span className='font-inter text-[12px] text-app-brand-primary-100'>
              CENTRAL DE ATENDIMENTO: 3003-5455 | 0800 730 5455{' '}
            </span>
            <span className='font-inter text-[12px] text-app-brand-primary-100 uppercase flex gap-1 items-center'>
              <FiInfo />
              demais regiões
            </span>
          </div>
          <Button
            className='w-[160px] sm:w-[210px]'
            label='Fazer login'
            variant='blue'
            icon={{
              icon: <FiUser />,
              position: 'left',
            }}
          />
        </div>
      </div>
      <div className='w-full h-[80px] py-2 flex justify-center items-center bg-white border-b border-app-neutral-10'>
        <div className='w-[90%] md:w-[80%] flex items-center justify-between'>
          <div className='w-full flex items-center justify-center gap-5'>
            <img src='/img/logo.png' alt='logo' className='w-[240px]' />
            <TabsWrapper className='flex flex-1 flex-row justify-center items-center gap-3'>
              {pages.map((page) => (
                <div
                  key={page.label}
                  className={`flex items-center ${page.active ? 'active' : ''}`}
                >
                  <Link href={page.href} className='font-dm-sans font-normal text-[14px] text-app-neutral-200'>
                    {page.label}
                  </Link>
                </div>
              ))}
            </TabsWrapper>
          </div>
          <div>
            <Button
              className='w-[210px] sm:w-[210px]'
              label='Crie sua conta'
              variant='yellow'
              icon={{
                icon: <FiPlusCircle />,
                position: 'left',
              }}
            />
          </div>

        </div>
      </div>
    </>
  );
};

export default Header;
