/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MlmMatrixWhereInput } from "./MlmMatrixWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MlmMatrixListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MlmMatrixWhereInput,
  })
  @ValidateNested()
  @Type(() => MlmMatrixWhereInput)
  @IsOptional()
  @Field(() => MlmMatrixWhereInput, {
    nullable: true,
  })
  every?: MlmMatrixWhereInput;

  @ApiProperty({
    required: false,
    type: () => MlmMatrixWhereInput,
  })
  @ValidateNested()
  @Type(() => MlmMatrixWhereInput)
  @IsOptional()
  @Field(() => MlmMatrixWhereInput, {
    nullable: true,
  })
  some?: MlmMatrixWhereInput;

  @ApiProperty({
    required: false,
    type: () => MlmMatrixWhereInput,
  })
  @ValidateNested()
  @Type(() => MlmMatrixWhereInput)
  @IsOptional()
  @Field(() => MlmMatrixWhereInput, {
    nullable: true,
  })
  none?: MlmMatrixWhereInput;
}
export { MlmMatrixListRelationFilter as MlmMatrixListRelationFilter };