import { SortOrder } from "../../util/SortOrder";

export type WastageOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  quantity?: SortOrder;
  rawMaterialId?: SortOrder;
  updatedAt?: SortOrder;
};
