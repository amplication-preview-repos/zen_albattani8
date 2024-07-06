import { InventoryCreateNestedManyWithoutRawMaterialsInput } from "./InventoryCreateNestedManyWithoutRawMaterialsInput";
import { WastageCreateNestedManyWithoutRawMaterialsInput } from "./WastageCreateNestedManyWithoutRawMaterialsInput";

export type RawMaterialCreateInput = {
  cost?: number | null;
  inventories?: InventoryCreateNestedManyWithoutRawMaterialsInput;
  name?: string | null;
  unit?: "Option1" | null;
  wastages?: WastageCreateNestedManyWithoutRawMaterialsInput;
};
