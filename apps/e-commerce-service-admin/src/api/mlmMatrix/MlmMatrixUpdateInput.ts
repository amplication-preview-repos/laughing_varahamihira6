import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MlmMatrixUpdateInput = {
  commissionLimit?: number | null;
  level?: number | null;
  parentId?: string | null;
  user?: UserWhereUniqueInput | null;
};
