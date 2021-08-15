import "reflect-metadata";
import { Person } from "../entities/person.entity";
import { PersonService } from "./person.service";

describe("Person Service Test", () => {
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

  test("Get all people", () => {
    const result = personService.getPeople();
    expect(result).toStrictEqual(db);
  });

  test("Get Moundir", () => {
    const result = personService.getPeople("Moundir");
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
    const result = personService.getPeople("", 0, 1);
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
