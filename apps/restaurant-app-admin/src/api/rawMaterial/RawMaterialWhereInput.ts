import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InventoryListRelationFilter } from "../inventory/InventoryListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { WastageListRelationFilter } from "../wastage/WastageListRelationFilter";

export type RawMaterialWhereInput = {
  cost?: FloatNullableFilter;
  id?: StringFilter;
  inventories?: InventoryListRelationFilter;
  name?: StringNullableFilter;
  unit?: "Option1";
  wastages?: WastageListRelationFilter;
};
