import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MlmMatrixServiceBase } from "./base/mlmMatrix.service.base";

@Injectable()
export class MlmMatrixService extends MlmMatrixServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
