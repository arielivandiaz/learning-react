import React from "react";

export const Component3 = () => {
  const clicked = (e, name) => {
    alert(` Hi ${name}!!! U clicked! `);
  };

  const consoleMsg = (e, msg) => {
    console.log(msg);
  };

  return (
    <>
      <div>
        <button onClick={(e) => clicked(e, "Ivan")}>Click me</button>
        <button onDoubleClick={(e) => clicked(e, "Ariel")}>
          Double click me
        </button>
        <button
          onMouseEnter={(e) => consoleMsg(e, "mouse in")}
          onMouseLeave={(e) => consoleMsg(e, "mouse out")}
        >
          Get in me
        </button>
      </div>
    </>
  );
};
