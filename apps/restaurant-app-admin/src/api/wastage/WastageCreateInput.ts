import { RawMaterialWhereUniqueInput } from "../rawMaterial/RawMaterialWhereUniqueInput";

export type WastageCreateInput = {
  date?: Date | null;
  quantity?: number | null;
  rawMaterial?: RawMaterialWhereUniqueInput | null;
};
