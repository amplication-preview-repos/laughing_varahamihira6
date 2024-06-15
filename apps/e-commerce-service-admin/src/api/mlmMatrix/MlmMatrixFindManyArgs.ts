import { MlmMatrixWhereInput } from "./MlmMatrixWhereInput";
import { MlmMatrixOrderByInput } from "./MlmMatrixOrderByInput";

export type MlmMatrixFindManyArgs = {
  where?: MlmMatrixWhereInput;
  orderBy?: Array<MlmMatrixOrderByInput>;
  skip?: number;
  take?: number;
};
