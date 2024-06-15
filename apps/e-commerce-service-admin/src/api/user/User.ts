import { MlmBinary } from "../mlmBinary/MlmBinary";
import { MlmMatrix } from "../mlmMatrix/MlmMatrix";
import { Order } from "../order/Order";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  mlmBinaries?: Array<MlmBinary>;
  mlmMatrices?: Array<MlmMatrix>;
  orders?: Array<Order>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
