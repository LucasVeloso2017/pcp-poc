import { CardProductProps } from './CardProduct.types';

export const mockProducts: Omit<CardProductProps, 'onSelectProduct' | 'onCardClick'>[] = [
  {
    image: '/coffee-grinder.jpg',
    name: 'Moinho de café, pimenta e semelhantes',
    description: 'Moinho de café, pimenta e semelhantes',
    characteristics: [
      { category: 'Material', name: 'Ferro' },
      { category: 'Tipo', name: 'Manual' },
      { category: 'Acessórios', name: 'Garra De Fixa...' }
    ],
    additionalCategories: [
      { label: 'Reservatório', value: 'Removível' },
      { label: 'Partes Desmontáveis', value: 'Sim' }
    ]
  },
  {
    image: '/coffee-grinder.jpg',
    name: 'Cafeteira Elétrica Premium',
    description: 'Cafeteira elétrica com sistema de filtragem avançado',
    characteristics: [
      { category: 'Material', name: 'Aço Inox' },
      { category: 'Tipo', name: 'Elétrico' },
      { category: 'Capacidade', name: '1.2L' }
    ],
    additionalCategories: [
      { label: 'Timer', value: 'Programável' },
      { label: 'Aquecimento', value: 'Automático' }
    ]
  },
  {
    image: '/coffee-grinder.jpg',
    name: 'Moedor de Especiarias',
    description: 'Ideal para moer café, pimenta, especiarias e temperos',
    characteristics: [
      { category: 'Material', name: 'Cerâmica' },
      { category: 'Tipo', name: 'Manual' },
      { category: 'Base', name: 'Antiderrapante' }
    ],
    additionalCategories: [
      { label: 'Ajuste', value: 'Múltiplos níveis' },
      { label: 'Limpeza', value: 'Fácil' }
    ]
  }
];
