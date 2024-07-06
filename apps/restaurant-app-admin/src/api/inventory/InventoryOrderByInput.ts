import { SortOrder } from "../../util/SortOrder";

export type InventoryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  quantity?: SortOrder;
  rawMaterialId?: SortOrder;
  updatedAt?: SortOrder;
};
