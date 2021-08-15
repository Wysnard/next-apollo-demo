import "reflect-metadata";
import { Person } from "../entities/person.entity";
import { PersonService } from "../services/person.service";
import { PersonResolver } from "./person.resolver";

describe("Person Resolver Test", () => {
  const db = [
    new Person({
      id: 1,
      name: "Vincent LAY",
      address: "1 rue Random, hola, France",
      email: "vincent.lay77@gmail.com",
      phone_number: "0623423498",
    }),
    new Person({
      id: 2,
      name: "Moundir Zoughari",
      address: "2 rue des îles, kohlanta, France",
      email: "mounmoun@gmail.com",
      phone_number: "0623465498",
    }),
  ];
  const personService = new PersonService();
  personService.db = db;
  const personResolver = new PersonResolver(personService);

  test("Get all people", () => {
    const result = personResolver.getPeople({ searchText: "", offset: 0 });
    expect(result).toStrictEqual(db);
  });

  test("Get Moundir", () => {
    const result = personResolver.getPeople({
      searchText: "Moundir",
      offset: 0,
    });
    expect(result).toStrictEqual([
      new Person({
        id: 2,
        name: "Moundir Zoughari",
        address: "2 rue des îles, kohlanta, France",
        email: "mounmoun@gmail.com",
        phone_number: "0623465498",
      }),
    ]);
  });

  test("Get First Element", () => {
    const result = personResolver.getPeople({
      searchText: "",
      offset: 0,
      limit: 1,
    });
    expect(result).toStrictEqual([
      new Person({
        id: 1,
        name: "Vincent LAY",
        address: "1 rue Random, hola, France",
        email: "vincent.lay77@gmail.com",
        phone_number: "0623423498",
      }),
    ]);
  });
});
