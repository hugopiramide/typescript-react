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

export interface UserRequest {
  username: string;
  email: string;
  password: string;
  profileImgUrl: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface UserResponse {
  id: number;
  username: string;
  email: string;
  profileImgUrl: string;
  role: string;
  createdAt: string;
}

export interface CartItemResponse {
  id: number;
  productVariant: ProductVariantResponse;
  quantity: number;
}

export interface CartResponse {
  userId: UserResponse;
  items: CartItemResponse[];
  createdAt: string;
}

export interface CartRequest {
  userId: number;
  cartItems: CartItemRequest[];
}

export interface CartItemRequest {
  productVariantId: number;
  quantity: number;
}