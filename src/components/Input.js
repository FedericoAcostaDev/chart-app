import React from "react";
import { TextField } from "@material-ui/core";

const Input = (props) => {
  return (
    <form style={{ margin: "1rem 0" }}>
      <TextField
        onChange={props.change}
        fullWidth
        label="Search for anything!"
      />
    </form>
  );
};

export default Input;
