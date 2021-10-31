import React from "react";
import Galery from "../../components/Galery/Galery";
import {} from "@material-ui/core";

import classes from "./PageOne.module.scss";

const PageOne = (props) => {
  return (
    <div className={classes.root}>
      <Galery />
    </div>
  );
};

export default PageOne;
