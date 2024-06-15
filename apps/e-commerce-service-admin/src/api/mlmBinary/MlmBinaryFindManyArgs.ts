import { MlmBinaryWhereInput } from "./MlmBinaryWhereInput";
import { MlmBinaryOrderByInput } from "./MlmBinaryOrderByInput";

export type MlmBinaryFindManyArgs = {
  where?: MlmBinaryWhereInput;
  orderBy?: Array<MlmBinaryOrderByInput>;
  skip?: number;
  take?: number;
};
