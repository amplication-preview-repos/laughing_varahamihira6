import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MlmBinaryCreateInput = {
  commissionLimit?: number | null;
  leftUserId?: string | null;
  rightUserId?: string | null;
  user?: UserWhereUniqueInput | null;
};
