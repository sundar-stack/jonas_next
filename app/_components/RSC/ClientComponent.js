"use client";

import React, { useEffect, useState } from "react";
import ServerComponent from "./ServerComponent";

const ClientComponent = ({ children }) => {
  console.log("From Client");

  const [text, setText] = useState("");

  useEffect(() => {
    setText("Client Component");
  }, []);

  return (
    <div>
      <h1>{text}</h1>
      {children}
      {/* <ServerComponent /> */}
    </div>
  );
};

export default ClientComponent;
