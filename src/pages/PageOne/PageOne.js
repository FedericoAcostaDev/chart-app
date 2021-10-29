import React from "react";
import Galery from "../../components/Galery";
import { GridList } from "@material-ui/core";
const PageOne = (props) => {
  return (
    <div>
      <GridList
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Galery />
      </GridList>
    </div>
  );
};

export default PageOne;
