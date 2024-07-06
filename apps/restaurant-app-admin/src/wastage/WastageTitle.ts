import { Wastage as TWastage } from "../api/wastage/Wastage";

export const WASTAGE_TITLE_FIELD = "id";

export const WastageTitle = (record: TWastage): string => {
  return record.id?.toString() || String(record.id);
};
