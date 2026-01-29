export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  imageURL: string;
  description: string;
}

export type AuthMode = 'login' | 'register'