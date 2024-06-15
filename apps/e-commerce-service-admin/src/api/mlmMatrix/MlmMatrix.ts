import { User } from "../user/User";

export type MlmMatrix = {
  commissionLimit: number | null;
  createdAt: Date;
  id: string;
  level: number | null;
  parentId: string | null;
  updatedAt: Date;
  user?: User | null;
};
