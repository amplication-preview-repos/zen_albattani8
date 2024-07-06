import { RawMaterialWhereUniqueInput } from "../rawMaterial/RawMaterialWhereUniqueInput";

export type WastageUpdateInput = {
  date?: Date | null;
  quantity?: number | null;
  rawMaterial?: RawMaterialWhereUniqueInput | null;
};
