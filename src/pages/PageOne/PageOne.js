import React from "react";
import {} from "@material-ui/core";

import classes from "./PageOne.module.scss";
import SearchImages from "../../components/Search/SearchImages";

const PageOne = (props) => {
  return (
    <div className={classes.root}>
      <SearchImages />
    </div>
  );
};

export default PageOne;
