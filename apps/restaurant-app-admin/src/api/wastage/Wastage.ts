import { RawMaterial } from "../rawMaterial/RawMaterial";

export type Wastage = {
  createdAt: Date;
  date: Date | null;
  id: string;
  quantity: number | null;
  rawMaterial?: RawMaterial | null;
  updatedAt: Date;
};
