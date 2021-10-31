import React, { useEffect, useState } from "react";
import classes from "./Home.module.scss";
import { Collapse } from "@material-ui/core";

//import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Home = () => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root}>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 2000 } : {})}
        collapsedHeight={20}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            WELCOME TO TEKAL <br />
            <span className={classes.colorText}>
              Select a file type to start
            </span>
          </h1>
        </div>
      </Collapse>
    </div>
  );
};

export default Home;
