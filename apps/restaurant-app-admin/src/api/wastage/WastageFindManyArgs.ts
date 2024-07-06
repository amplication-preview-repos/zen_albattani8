import { WastageWhereInput } from "./WastageWhereInput";
import { WastageOrderByInput } from "./WastageOrderByInput";

export type WastageFindManyArgs = {
  where?: WastageWhereInput;
  orderBy?: Array<WastageOrderByInput>;
  skip?: number;
  take?: number;
};
