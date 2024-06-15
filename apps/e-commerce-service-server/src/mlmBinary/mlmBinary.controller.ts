import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MlmBinaryService } from "./mlmBinary.service";
import { MlmBinaryControllerBase } from "./base/mlmBinary.controller.base";

@swagger.ApiTags("mlmBinaries")
@common.Controller("mlmBinaries")
export class MlmBinaryController extends MlmBinaryControllerBase {
  constructor(protected readonly service: MlmBinaryService) {
    super(service);
  }
}
