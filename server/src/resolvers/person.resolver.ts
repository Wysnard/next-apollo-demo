import { Arg, Args, Query, Resolver } from "type-graphql";
import { Service } from "typedi";

import { Person } from "../entities/person.entity";
import { PersonService } from "../services/person.service";
import { PaginationArgs } from "../models/pagination.arg";

@Service()
@Resolver(Person)
export class PersonResolver {
  constructor(private personService: PersonService) {}

  @Query((returns) => [Person])
  getPeople(@Args() { searchText, offset, limit }: PaginationArgs): Person[] {
    if (limit)
      return this.personService.getPeople(searchText, offset, offset + limit);
    return this.personService.getPeople(searchText, offset);
  }
}
