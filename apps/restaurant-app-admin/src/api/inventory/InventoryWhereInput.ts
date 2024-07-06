import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { RawMaterialWhereUniqueInput } from "../rawMaterial/RawMaterialWhereUniqueInput";

export type InventoryWhereInput = {
  id?: StringFilter;
  quantity?: FloatNullableFilter;
  rawMaterial?: RawMaterialWhereUniqueInput;
};
