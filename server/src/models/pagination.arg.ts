import { ArgsType, Field, Int } from "type-graphql";
import { Min } from "class-validator";

@ArgsType()
export class PaginationArgs {
  @Field((type) => String, { defaultValue: "" })
  searchText!: string;

  @Field((type) => Int, { defaultValue: 0 })
  @Min(0)
  offset!: number;

  @Field((type) => Int, { nullable: true })
  limit?: number;
}
