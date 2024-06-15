import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MlmBinaryListRelationFilter } from "../mlmBinary/MlmBinaryListRelationFilter";
import { MlmMatrixListRelationFilter } from "../mlmMatrix/MlmMatrixListRelationFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  mlmBinaries?: MlmBinaryListRelationFilter;
  mlmMatrices?: MlmMatrixListRelationFilter;
  orders?: OrderListRelationFilter;
  username?: StringFilter;
};
