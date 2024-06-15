import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MlmBinaryWhereInput = {
  commissionLimit?: FloatNullableFilter;
  id?: StringFilter;
  leftUserId?: StringNullableFilter;
  rightUserId?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
