import { MlmBinary as TMlmBinary } from "../api/mlmBinary/MlmBinary";

export const MLMBINARY_TITLE_FIELD = "leftUserId";

export const MlmBinaryTitle = (record: TMlmBinary): string => {
  return record.leftUserId?.toString() || String(record.id);
};
