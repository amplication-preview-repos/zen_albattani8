import { RawMaterial } from "../rawMaterial/RawMaterial";

export type Inventory = {
  createdAt: Date;
  id: string;
  quantity: number | null;
  rawMaterial?: RawMaterial | null;
  updatedAt: Date;
};
