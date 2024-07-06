import { RawMaterialWhereUniqueInput } from "../rawMaterial/RawMaterialWhereUniqueInput";

export type InventoryCreateInput = {
  quantity?: number | null;
  rawMaterial?: RawMaterialWhereUniqueInput | null;
};
