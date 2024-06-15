import { Module } from "@nestjs/common";
import { MlmMatrixModuleBase } from "./base/mlmMatrix.module.base";
import { MlmMatrixService } from "./mlmMatrix.service";
import { MlmMatrixController } from "./mlmMatrix.controller";
import { MlmMatrixResolver } from "./mlmMatrix.resolver";

@Module({
  imports: [MlmMatrixModuleBase],
  controllers: [MlmMatrixController],
  providers: [MlmMatrixService, MlmMatrixResolver],
  exports: [MlmMatrixService],
})
export class MlmMatrixModule {}
