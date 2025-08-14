import React from 'react';
import Image from 'next/image';
import { CardProductProps } from './CardProduct.types';

const CardProduct: React.FC<CardProductProps> = ({
  image,
  name,
  description,
  characteristics,
  additionalCategories,
  onSelectProduct,
  onCardClick,
  className = ''
}) => {
  return (
    <div
      className={`bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden w-[366px] min-w-[300px] h-[528px] ${className}`}
      onClick={onCardClick}
    >
      <div className="w-full h-48 bg-gray-100 flex items-center justify-center relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain p-4"
        />
      </div>

      <div className="p-6 flex flex-col h-[328px]">
        <h3 className="text-base font-normal text-gray-900 mb-2 text-center leading-[120%]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
          {name}
        </h3>

        <p className="text-xs font-normal text-gray-600 mb-6 text-center leading-[140%]" style={{ fontFamily: 'Inter, sans-serif' }}>
          {description}
        </p>

        <div className="mb-6 flex-1">
          <h4 className="text-xs font-normal text-gray-900 mb-4 text-center leading-[140%]" style={{ fontFamily: 'Inter, sans-serif' }}>
            Características do Produto
          </h4>
          
          <div className="grid grid-cols-3 gap-4 mb-4">
            {characteristics.map((char, index) => (
              <div key={index} className="text-center">
                <p className="text-[8px] font-normal text-gray-500 mb-1 leading-[100%]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {char.category}
                </p>
                <p className="text-xs font-normal text-gray-900 leading-[100%]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {char.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {additionalCategories.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-normal text-gray-900 mb-2 text-center leading-[100%]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Características Adicionais
            </h4>
            <div className="text-xs font-normal text-gray-600 text-center leading-[100%]" style={{ fontFamily: 'Inter, sans-serif' }}>
              {additionalCategories.map((category, index) => (
                <span key={index}>
                  {category.label}: {category.value}
                  {index < additionalCategories.length - 1 && ', '}
                </span>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelectProduct();
          }}
          className="w-full bg-orange-500 text-white py-4 px-6 rounded-full font-semibold text-sm hover:bg-orange-600 transition-colors mt-auto"
          style={{ backgroundColor: '#FF8A00' }}
        >
          SELECIONAR PRODUTO
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
