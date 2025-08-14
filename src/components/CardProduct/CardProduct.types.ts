export interface ProductCharacteristic {
  category: string;
  name: string;
}

export interface AdditionalCategory {
  label: string;
  value: string;
}

export interface CardProductProps {
  image: string;
  name: string;
  description: string;
  characteristics: ProductCharacteristic[];
  additionalCategories: AdditionalCategory[];
  onSelectProduct: () => void;
  onCardClick: () => void;
  className?: string;
}
