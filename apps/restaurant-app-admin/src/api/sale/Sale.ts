import { Product } from "../product/Product";

export type Sale = {
  createdAt: Date;
  date: Date | null;
  id: string;
  product?: Product | null;
  quantity: number | null;
  updatedAt: Date;
};
