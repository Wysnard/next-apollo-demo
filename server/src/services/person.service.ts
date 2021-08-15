import _ from "lodash";
import faker from "faker";
import { Person } from "../entities/person.entity";
import { Service } from "typedi";

@Service()
export class PersonService {
  public db: Person[];
  constructor() {
    faker.locale = "fr";
    this.db = _(_.range(0, 2000))
      .map(
        (id) =>
          new Person({
            id,
            name: faker.fake("{{name.lastName}} {{name.firstName}}"),
            address: faker.fake(
              `${Math.floor(
                Math.random() * 100
              )} {{address.streetPrefix}} {{address.streetName}}, {{address.cityName}}, France`
            ),
            email: faker.internet.email(),
            phone_number: faker.phone.phoneNumber("06########"),
          })
      )
      .value();
  }

  getPeople(searchText = "", offset = 0, limit = this.db.length) {
    const ret = this.db
      .filter((person) =>
        person.name.toLowerCase().match(searchText.toLowerCase())
      )
      .slice(offset, limit);
    return ret;
  }
}
