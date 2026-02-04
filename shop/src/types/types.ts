export interface ProductResponse {
  id: number;
  name: string;
  category: CategoryResponse;
  basePrice: number;
  imageUrl: string;
  description: string;
  active: boolean;
  variants: ProductVariantResponse[];
}

export interface CategoryResponse {
  id: number;
  name: string;
  description: string;
}

export interface ProductVariantResponse {
  id: number;
  size: string;
  stock: number;
  priceModifier: number;
}

export type AuthMode = 'login' | 'register'