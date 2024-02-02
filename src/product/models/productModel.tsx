export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: any;
  Image: string;
  categorieId: number;
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
