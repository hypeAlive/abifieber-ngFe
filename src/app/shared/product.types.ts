export type Product = {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
}

export type ProductCreation = Omit<Product, "id">;


