/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { MlmBinary } from "./MlmBinary";
import { MlmBinaryCountArgs } from "./MlmBinaryCountArgs";
import { MlmBinaryFindManyArgs } from "./MlmBinaryFindManyArgs";
import { MlmBinaryFindUniqueArgs } from "./MlmBinaryFindUniqueArgs";
import { CreateMlmBinaryArgs } from "./CreateMlmBinaryArgs";
import { UpdateMlmBinaryArgs } from "./UpdateMlmBinaryArgs";
import { DeleteMlmBinaryArgs } from "./DeleteMlmBinaryArgs";
import { User } from "../../user/base/User";
import { MlmBinaryService } from "../mlmBinary.service";
@graphql.Resolver(() => MlmBinary)
export class MlmBinaryResolverBase {
  constructor(protected readonly service: MlmBinaryService) {}

  async _mlmBinariesMeta(
    @graphql.Args() args: MlmBinaryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [MlmBinary])
  async mlmBinaries(
    @graphql.Args() args: MlmBinaryFindManyArgs
  ): Promise<MlmBinary[]> {
    return this.service.mlmBinaries(args);
  }

  @graphql.Query(() => MlmBinary, { nullable: true })
  async mlmBinary(
    @graphql.Args() args: MlmBinaryFindUniqueArgs
  ): Promise<MlmBinary | null> {
    const result = await this.service.mlmBinary(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => MlmBinary)
  async createMlmBinary(
    @graphql.Args() args: CreateMlmBinaryArgs
  ): Promise<MlmBinary> {
    return await this.service.createMlmBinary({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => MlmBinary)
  async updateMlmBinary(
    @graphql.Args() args: UpdateMlmBinaryArgs
  ): Promise<MlmBinary | null> {
    try {
      return await this.service.updateMlmBinary({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => MlmBinary)
  async deleteMlmBinary(
    @graphql.Args() args: DeleteMlmBinaryArgs
  ): Promise<MlmBinary | null> {
    try {
      return await this.service.deleteMlmBinary(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: MlmBinary): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}