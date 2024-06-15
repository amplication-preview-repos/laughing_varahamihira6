import { User } from "../user/User";

export type MlmBinary = {
  commissionLimit: number | null;
  createdAt: Date;
  id: string;
  leftUserId: string | null;
  rightUserId: string | null;
  updatedAt: Date;
  user?: User | null;
};
