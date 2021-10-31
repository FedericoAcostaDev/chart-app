import React from "react";
import Galery from "../../components/Galery/Galery";
import {} from "@material-ui/core";
import Input from "../../components/Input";
import classes from "./PageOne.module.scss";

const PageOne = (props) => {
  return (
    <div className={classes.root}>
      <Input className={classes.search} />
      <Galery />
    </div>
  );
};

export default PageOne;
