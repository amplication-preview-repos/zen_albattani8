import { InventoryUpdateManyWithoutRawMaterialsInput } from "./InventoryUpdateManyWithoutRawMaterialsInput";
import { WastageUpdateManyWithoutRawMaterialsInput } from "./WastageUpdateManyWithoutRawMaterialsInput";

export type RawMaterialUpdateInput = {
  cost?: number | null;
  inventories?: InventoryUpdateManyWithoutRawMaterialsInput;
  name?: string | null;
  unit?: "Option1" | null;
  wastages?: WastageUpdateManyWithoutRawMaterialsInput;
};
