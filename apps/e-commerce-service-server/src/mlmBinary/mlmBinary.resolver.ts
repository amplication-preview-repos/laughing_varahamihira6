import * as graphql from "@nestjs/graphql";
import { MlmBinaryResolverBase } from "./base/mlmBinary.resolver.base";
import { MlmBinary } from "./base/MlmBinary";
import { MlmBinaryService } from "./mlmBinary.service";

@graphql.Resolver(() => MlmBinary)
export class MlmBinaryResolver extends MlmBinaryResolverBase {
  constructor(protected readonly service: MlmBinaryService) {
    super(service);
  }
}
