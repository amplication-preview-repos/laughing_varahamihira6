import { MlmMatrix as TMlmMatrix } from "../api/mlmMatrix/MlmMatrix";

export const MLMMATRIX_TITLE_FIELD = "parentId";

export const MlmMatrixTitle = (record: TMlmMatrix): string => {
  return record.parentId?.toString() || String(record.id);
};
