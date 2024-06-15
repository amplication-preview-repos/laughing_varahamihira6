import { Module } from "@nestjs/common";
import { MlmBinaryModuleBase } from "./base/mlmBinary.module.base";
import { MlmBinaryService } from "./mlmBinary.service";
import { MlmBinaryController } from "./mlmBinary.controller";
import { MlmBinaryResolver } from "./mlmBinary.resolver";

@Module({
  imports: [MlmBinaryModuleBase],
  controllers: [MlmBinaryController],
  providers: [MlmBinaryService, MlmBinaryResolver],
  exports: [MlmBinaryService],
})
export class MlmBinaryModule {}
