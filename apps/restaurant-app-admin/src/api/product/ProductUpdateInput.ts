import { SaleUpdateManyWithoutProductsInput } from "./SaleUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  description?: string | null;
  name?: string | null;
  price?: number | null;
  sales?: SaleUpdateManyWithoutProductsInput;
};
