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
import { MlmBinaryService } from "../mlmBinary.service";
import { MlmBinaryCreateInput } from "./MlmBinaryCreateInput";
import { MlmBinary } from "./MlmBinary";
import { MlmBinaryFindManyArgs } from "./MlmBinaryFindManyArgs";
import { MlmBinaryWhereUniqueInput } from "./MlmBinaryWhereUniqueInput";
import { MlmBinaryUpdateInput } from "./MlmBinaryUpdateInput";

export class MlmBinaryControllerBase {
  constructor(protected readonly service: MlmBinaryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MlmBinary })
  async createMlmBinary(
    @common.Body() data: MlmBinaryCreateInput
  ): Promise<MlmBinary> {
    return await this.service.createMlmBinary({
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
        leftUserId: true,
        rightUserId: true,
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
  @swagger.ApiOkResponse({ type: [MlmBinary] })
  @ApiNestedQuery(MlmBinaryFindManyArgs)
  async mlmBinaries(@common.Req() request: Request): Promise<MlmBinary[]> {
    const args = plainToClass(MlmBinaryFindManyArgs, request.query);
    return this.service.mlmBinaries({
      ...args,
      select: {
        commissionLimit: true,
        createdAt: true,
        id: true,
        leftUserId: true,
        rightUserId: true,
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
  @swagger.ApiOkResponse({ type: MlmBinary })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async mlmBinary(
    @common.Param() params: MlmBinaryWhereUniqueInput
  ): Promise<MlmBinary | null> {
    const result = await this.service.mlmBinary({
      where: params,
      select: {
        commissionLimit: true,
        createdAt: true,
        id: true,
        leftUserId: true,
        rightUserId: true,
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
  @swagger.ApiOkResponse({ type: MlmBinary })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMlmBinary(
    @common.Param() params: MlmBinaryWhereUniqueInput,
    @common.Body() data: MlmBinaryUpdateInput
  ): Promise<MlmBinary | null> {
    try {
      return await this.service.updateMlmBinary({
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
          leftUserId: true,
          rightUserId: true,
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
  @swagger.ApiOkResponse({ type: MlmBinary })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMlmBinary(
    @common.Param() params: MlmBinaryWhereUniqueInput
  ): Promise<MlmBinary | null> {
    try {
      return await this.service.deleteMlmBinary({
        where: params,
        select: {
          commissionLimit: true,
          createdAt: true,
          id: true,
          leftUserId: true,
          rightUserId: true,
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