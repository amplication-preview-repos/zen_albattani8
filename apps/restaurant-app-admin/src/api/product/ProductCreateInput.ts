import { SaleCreateNestedManyWithoutProductsInput } from "./SaleCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  description?: string | null;
  name?: string | null;
  price?: number | null;
  sales?: SaleCreateNestedManyWithoutProductsInput;
};
