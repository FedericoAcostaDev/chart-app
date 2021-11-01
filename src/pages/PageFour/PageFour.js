import React from "react";
import { Box, Container, Grid } from "@material-ui/core";
import Dashboard from "../../components/dashboard/Dashboard";

const PageFour = () => {
  return (
    <div
      style={{
        marginTop: "5vh",
      }}
    >
      <h1>
        <title>File's Metrics</title>
      </h1>
      <br />
      <Box>
        <Dashboard />
      </Box>
    </div>
  );
};

export default PageFour;
