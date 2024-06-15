import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MlmBinaryServiceBase } from "./base/mlmBinary.service.base";

@Injectable()
export class MlmBinaryService extends MlmBinaryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
