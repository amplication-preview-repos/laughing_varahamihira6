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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { MlmBinaryListRelationFilter } from "../../mlmBinary/base/MlmBinaryListRelationFilter";
import { MlmMatrixListRelationFilter } from "../../mlmMatrix/base/MlmMatrixListRelationFilter";
import { OrderListRelationFilter } from "../../order/base/OrderListRelationFilter";

@InputType()
class UserWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  firstName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  lastName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => MlmBinaryListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MlmBinaryListRelationFilter)
  @IsOptional()
  @Field(() => MlmBinaryListRelationFilter, {
    nullable: true,
  })
  mlmBinaries?: MlmBinaryListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => MlmMatrixListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MlmMatrixListRelationFilter)
  @IsOptional()
  @Field(() => MlmMatrixListRelationFilter, {
    nullable: true,
  })
  mlmMatrices?: MlmMatrixListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => OrderListRelationFilter,
  })
  @ValidateNested()
  @Type(() => OrderListRelationFilter)
  @IsOptional()
  @Field(() => OrderListRelationFilter, {
    nullable: true,
  })
  orders?: OrderListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  username?: StringFilter;
}

export { UserWhereInput as UserWhereInput };
