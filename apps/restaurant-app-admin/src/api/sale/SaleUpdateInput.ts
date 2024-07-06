import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type SaleUpdateInput = {
  date?: Date | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
};
