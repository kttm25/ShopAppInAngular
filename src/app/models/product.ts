export interface Product {
  _id: string;
  name: string;
  description: string;
  category: string[];
  imageUrl: string[];
  soldPrice: number;
  regularPrice: number;
  created_At: Date;
  updated_At?: Date;
}
