/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { MlmBinaryWhereUniqueInput } from "../../mlmBinary/base/MlmBinaryWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MlmBinaryUpdateManyWithoutUsersInput {
  @Field(() => [MlmBinaryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MlmBinaryWhereUniqueInput],
  })
  connect?: Array<MlmBinaryWhereUniqueInput>;

  @Field(() => [MlmBinaryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MlmBinaryWhereUniqueInput],
  })
  disconnect?: Array<MlmBinaryWhereUniqueInput>;

  @Field(() => [MlmBinaryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MlmBinaryWhereUniqueInput],
  })
  set?: Array<MlmBinaryWhereUniqueInput>;
}

export { MlmBinaryUpdateManyWithoutUsersInput as MlmBinaryUpdateManyWithoutUsersInput };
