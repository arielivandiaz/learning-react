import React from "react";
import Component2  from './Component2';

export const Component1 = () => {
  let name = "Ariel Ivan Diaz";
  let company = "Laguna";

  let stack = {
    backend: "node",
    frontend: "react",
    database: "SQL",
  };
  return (
    <>
      <h3>{name}</h3>
      <h4> {company} </h4>
      <ul>
        {Object.entries(stack).map(([key, value], index) => (
          <div key={index}>
            <strong>{key}: </strong>
            {value}
          </div>
        ))}
      </ul>
      <Component2 job='Project Manager'></Component2>
    </>
  );
};
