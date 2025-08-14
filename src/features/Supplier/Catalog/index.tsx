"use client";
import ActionCard from "@/components/ActionCard/ActionCard";
import CardProduct from "@/components/CardProduct/CardProduct";
import { mockProducts } from "@/components/CardProduct/mockData";
import { Filter, Search } from "lucide-react";
import { useState } from "react";
export enum SearchType {
  NAME = "name",
  CATEGORY = "category",
}

export const Catalog = () => {
  const [searchType, setSearchType] = useState<SearchType>(SearchType.NAME);
  const [showResults, setShowResults] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCardClick = (action: SearchType) => {
    setSearchType(action);
  };

  const handleSearch = () => {
    setShowResults(true);
  };

  const handleSelectProduct = (productName: string) => {
    console.log("Produto selecionado:", productName);
  };

  const handleCardProductClick = (productName: string) => {
    console.log("Card clicado:", productName);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Cadastro de produto
          </h1>
          <p className="text-gray-600 text-lg">
            Localize o produto base no catálogo para iniciar o cadastro
          </p>
        </div>

        <div className="border border-gray-200 rounded-t-2xl rounded-b-[40px] bg-white shadow-sm min-h-[423px]">
          <div className="bg-gray-100 border-b border-gray-200 px-4 py-2 rounded-t-2xl flex justify-between items-center h-16">
            <h2 className="text-xl font-semibold text-gray-900">
              Encontrar produto referência
            </h2>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <ActionCard
                icon={Search}
                title="Buscar por Nome"
                description="Se você conhece o nome ou descrição do produto, faça uma busca direta"
                onClick={() => handleCardClick(SearchType.NAME)}
                isActive={searchType === SearchType.NAME}
              />

              <ActionCard
                icon={Filter}
                title="Filtrar por categoria"
                description="Selecione uma categoria para encontrar o seu produto"
                onClick={() => handleCardClick(SearchType.CATEGORY)}
                isActive={searchType === SearchType.CATEGORY}
              />
            </div>

            <div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-500 mb-2">
                  Descreva seu produto
                </label>
                <div className="flex gap-2 items-end">
                  <input
                    type="text"
                    placeholder="Ex: papel A4, monitor LED, cadeira de escritório..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-gray-600 text-sm"
                  />
                  <button
                    onClick={handleSearch}
                    className="flex items-center gap-2 rounded-full bg-[#005A6E] px-8 py-3 text-white hover:bg-[#004b5b] transition"
                  >
                    <span className="font-semibold text-sm">BUSCAR</span>
                    <Search size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {showResults && (
            <div className="px-8 pb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Resultados da busca
              </h3>
              <div className="flex flex-wrap gap-6 justify-center">
                {mockProducts.map((product, index) => (
                  <CardProduct
                    key={index}
                    image={product.image}
                    name={product.name}
                    description={product.description}
                    characteristics={product.characteristics}
                    additionalCategories={product.additionalCategories}
                    onSelectProduct={() => handleSelectProduct(product.name)}
                    onCardClick={() => handleCardProductClick(product.name)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
