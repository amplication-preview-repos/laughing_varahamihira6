/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  MlmMatrix as PrismaMlmMatrix,
  User as PrismaUser,
} from "@prisma/client";

export class MlmMatrixServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.MlmMatrixCountArgs, "select">
  ): Promise<number> {
    return this.prisma.mlmMatrix.count(args);
  }

  async mlmMatrices<T extends Prisma.MlmMatrixFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MlmMatrixFindManyArgs>
  ): Promise<PrismaMlmMatrix[]> {
    return this.prisma.mlmMatrix.findMany<Prisma.MlmMatrixFindManyArgs>(args);
  }
  async mlmMatrix<T extends Prisma.MlmMatrixFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MlmMatrixFindUniqueArgs>
  ): Promise<PrismaMlmMatrix | null> {
    return this.prisma.mlmMatrix.findUnique(args);
  }
  async createMlmMatrix<T extends Prisma.MlmMatrixCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MlmMatrixCreateArgs>
  ): Promise<PrismaMlmMatrix> {
    return this.prisma.mlmMatrix.create<T>(args);
  }
  async updateMlmMatrix<T extends Prisma.MlmMatrixUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MlmMatrixUpdateArgs>
  ): Promise<PrismaMlmMatrix> {
    return this.prisma.mlmMatrix.update<T>(args);
  }
  async deleteMlmMatrix<T extends Prisma.MlmMatrixDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MlmMatrixDeleteArgs>
  ): Promise<PrismaMlmMatrix> {
    return this.prisma.mlmMatrix.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.mlmMatrix
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
