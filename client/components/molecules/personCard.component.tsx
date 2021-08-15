import React, { FunctionComponent } from "react";
import { Person } from "../../generated/graphql";

import Card from "../atoms/card.component";

interface PersonCardProps extends Omit<Person, "id"> {}

const PersonCard: FunctionComponent<PersonCardProps> = ({
  name,
  address,
  email,
  phone_number,
}) => {
  return (
    <Card>
      <h2 className="font-bold text-xl">{name}</h2>
      <p>{email}</p>
      <p>{address}</p>
      <p>{phone_number}</p>
    </Card>
  );
};

export default PersonCard;
