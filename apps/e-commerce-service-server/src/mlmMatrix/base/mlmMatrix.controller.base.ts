/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { MlmMatrixService } from "../mlmMatrix.service";
import { MlmMatrixCreateInput } from "./MlmMatrixCreateInput";
import { MlmMatrix } from "./MlmMatrix";
import { MlmMatrixFindManyArgs } from "./MlmMatrixFindManyArgs";
import { MlmMatrixWhereUniqueInput } from "./MlmMatrixWhereUniqueInput";
import { MlmMatrixUpdateInput } from "./MlmMatrixUpdateInput";

export class MlmMatrixControllerBase {
  constructor(protected readonly service: MlmMatrixService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MlmMatrix })
  async createMlmMatrix(
    @common.Body() data: MlmMatrixCreateInput
  ): Promise<MlmMatrix> {
    return await this.service.createMlmMatrix({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        commissionLimit: true,
        createdAt: true,
        id: true,
        level: true,
        parentId: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [MlmMatrix] })
  @ApiNestedQuery(MlmMatrixFindManyArgs)
  async mlmMatrices(@common.Req() request: Request): Promise<MlmMatrix[]> {
    const args = plainToClass(MlmMatrixFindManyArgs, request.query);
    return this.service.mlmMatrices({
      ...args,
      select: {
        commissionLimit: true,
        createdAt: true,
        id: true,
        level: true,
        parentId: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MlmMatrix })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async mlmMatrix(
    @common.Param() params: MlmMatrixWhereUniqueInput
  ): Promise<MlmMatrix | null> {
    const result = await this.service.mlmMatrix({
      where: params,
      select: {
        commissionLimit: true,
        createdAt: true,
        id: true,
        level: true,
        parentId: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: MlmMatrix })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMlmMatrix(
    @common.Param() params: MlmMatrixWhereUniqueInput,
    @common.Body() data: MlmMatrixUpdateInput
  ): Promise<MlmMatrix | null> {
    try {
      return await this.service.updateMlmMatrix({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          commissionLimit: true,
          createdAt: true,
          id: true,
          level: true,
          parentId: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: MlmMatrix })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMlmMatrix(
    @common.Param() params: MlmMatrixWhereUniqueInput
  ): Promise<MlmMatrix | null> {
    try {
      return await this.service.deleteMlmMatrix({
        where: params,
        select: {
          commissionLimit: true,
          createdAt: true,
          id: true,
          level: true,
          parentId: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
