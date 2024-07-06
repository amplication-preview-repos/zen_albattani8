import { Inventory } from "../inventory/Inventory";
import { Wastage } from "../wastage/Wastage";

export type RawMaterial = {
  cost: number | null;
  createdAt: Date;
  id: string;
  inventories?: Array<Inventory>;
  name: string | null;
  unit?: "Option1" | null;
  updatedAt: Date;
  wastages?: Array<Wastage>;
};
