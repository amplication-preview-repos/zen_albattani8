import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { RawMaterialWhereUniqueInput } from "../rawMaterial/RawMaterialWhereUniqueInput";

export type WastageWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  quantity?: FloatNullableFilter;
  rawMaterial?: RawMaterialWhereUniqueInput;
};
