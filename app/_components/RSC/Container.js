import React from "react";
import ClientComponent from "./ClientComponent";
import ServerComponent from "./ServerComponent";

const Container = () => {
  console.log("Container >> From Server");

  return (
    <>
      <ClientComponent>
        <ServerComponent></ServerComponent>
      </ClientComponent>
    </>
  );
};

export default Container;
