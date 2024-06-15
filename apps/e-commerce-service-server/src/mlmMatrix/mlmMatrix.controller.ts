import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MlmMatrixService } from "./mlmMatrix.service";
import { MlmMatrixControllerBase } from "./base/mlmMatrix.controller.base";

@swagger.ApiTags("mlmMatrices")
@common.Controller("mlmMatrices")
export class MlmMatrixController extends MlmMatrixControllerBase {
  constructor(protected readonly service: MlmMatrixService) {
    super(service);
  }
}
