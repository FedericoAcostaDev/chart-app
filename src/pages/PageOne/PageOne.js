import React from "react";
import Galery from "../../components/Galery/Galery";
import {} from "@material-ui/core";
import Input from "../../components/Input";

const PageOne = (props) => {
  return (
    <div
      style={{
        marginTop: "5vh",
      }}
    >
      <Input />
      <Galery />
    </div>
  );
};

export default PageOne;
