import React, { FunctionComponent } from "react";

// .card {
//     margin: 1rem;
//     padding: 1.5rem;
//     text-align: left;
//     color: inherit;
//     text-decoration: none;
//     border: 1px solid #eaeaea;
//     border-radius: 10px;
//     transition: color 0.15s ease, border-color 0.15s ease;
//     width: 45%;
//   }

interface CardProps {
  link?: string;
}

const Card: FunctionComponent<CardProps> = ({ children, link }) => {
  return (
    <a
      href={link}
      className="m-4 p-6 text-left border border-solid border-2 rounded-lg transition duration-150 hover:border-blue-600"
    >
      {children}
    </a>
  );
};

export default Card;
