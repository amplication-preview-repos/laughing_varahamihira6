import { SortOrder } from "../../util/SortOrder";

export type MlmBinaryOrderByInput = {
  commissionLimit?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  leftUserId?: SortOrder;
  rightUserId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
