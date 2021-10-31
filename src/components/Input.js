import React from "react";
import { TextField } from "@material-ui/core";
import classes from "./Input.module.scss";

const Input = (props) => {
  return (
    <div className={classes.root}>
      <form className={classes.form}>
        <TextField
          className={classes.textField}
          onChange={props.change}
          fullWidth
          label="Search for anything!"
        />
      </form>
    </div>
  );
};

export default Input;
