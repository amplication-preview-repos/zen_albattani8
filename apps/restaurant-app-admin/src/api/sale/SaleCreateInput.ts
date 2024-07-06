import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type SaleCreateInput = {
  date?: Date | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
};
