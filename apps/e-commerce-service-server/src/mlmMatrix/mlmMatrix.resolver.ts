import * as graphql from "@nestjs/graphql";
import { MlmMatrixResolverBase } from "./base/mlmMatrix.resolver.base";
import { MlmMatrix } from "./base/MlmMatrix";
import { MlmMatrixService } from "./mlmMatrix.service";

@graphql.Resolver(() => MlmMatrix)
export class MlmMatrixResolver extends MlmMatrixResolverBase {
  constructor(protected readonly service: MlmMatrixService) {
    super(service);
  }
}
