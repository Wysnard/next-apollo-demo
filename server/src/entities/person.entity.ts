import { Field, ID, ObjectType } from "type-graphql";

interface IPersonProp {
  id: number;
  name: string;
  address: string;
  email: string;
  phone_number: string;
}

@ObjectType()
export class Person {
  @Field((type) => ID)
  public id: number;

  @Field()
  public name: string;
  @Field()
  public address: string;
  @Field()
  public email: string;
  @Field()
  public phone_number: string;

  constructor({ id, name, address, email, phone_number }: IPersonProp) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.email = email;
    this.phone_number = phone_number;
  }
}
