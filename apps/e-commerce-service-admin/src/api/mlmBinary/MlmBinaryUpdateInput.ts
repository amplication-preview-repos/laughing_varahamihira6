import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MlmBinaryUpdateInput = {
  commissionLimit?: number | null;
  leftUserId?: string | null;
  rightUserId?: string | null;
  user?: UserWhereUniqueInput | null;
};
