import { RawMaterialWhereUniqueInput } from "../rawMaterial/RawMaterialWhereUniqueInput";

export type InventoryUpdateInput = {
  quantity?: number | null;
  rawMaterial?: RawMaterialWhereUniqueInput | null;
};
