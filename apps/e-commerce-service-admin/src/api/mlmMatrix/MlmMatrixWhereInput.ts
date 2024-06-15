import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MlmMatrixWhereInput = {
  commissionLimit?: FloatNullableFilter;
  id?: StringFilter;
  level?: IntNullableFilter;
  parentId?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
