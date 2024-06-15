import { MlmBinaryUpdateManyWithoutUsersInput } from "./MlmBinaryUpdateManyWithoutUsersInput";
import { MlmMatrixUpdateManyWithoutUsersInput } from "./MlmMatrixUpdateManyWithoutUsersInput";
import { OrderUpdateManyWithoutUsersInput } from "./OrderUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  mlmBinaries?: MlmBinaryUpdateManyWithoutUsersInput;
  mlmMatrices?: MlmMatrixUpdateManyWithoutUsersInput;
  orders?: OrderUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
