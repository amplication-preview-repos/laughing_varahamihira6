import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MlmMatrixCreateInput = {
  commissionLimit?: number | null;
  level?: number | null;
  parentId?: string | null;
  user?: UserWhereUniqueInput | null;
};
