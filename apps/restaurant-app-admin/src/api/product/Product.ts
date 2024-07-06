import { Sale } from "../sale/Sale";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  price: number | null;
  sales?: Array<Sale>;
  updatedAt: Date;
};
