import { MlmBinaryCreateNestedManyWithoutUsersInput } from "./MlmBinaryCreateNestedManyWithoutUsersInput";
import { MlmMatrixCreateNestedManyWithoutUsersInput } from "./MlmMatrixCreateNestedManyWithoutUsersInput";
import { OrderCreateNestedManyWithoutUsersInput } from "./OrderCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  mlmBinaries?: MlmBinaryCreateNestedManyWithoutUsersInput;
  mlmMatrices?: MlmMatrixCreateNestedManyWithoutUsersInput;
  orders?: OrderCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  username: string;
};
