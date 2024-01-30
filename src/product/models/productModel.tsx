export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  Image: string;
  categoryId: number;
  category: Category;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: number;
  name: string;
  products: Product[];
  createdAt: Date;
  updatedAt: Date;
}
