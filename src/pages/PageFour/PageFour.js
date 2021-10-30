import React from "react";
import { Helmet } from "react-helmet";
import { Box, Container, Grid } from "@material-ui/core";
import Model1 from "../../components/dashboard/chart1";
import Model2 from "../../components/dashboard/chart2";
import Model3 from "../../components/dashboard/chart3";
import ItemHeight from "../../components/dashboard/height";
import PerFrame from "../../components/dashboard/PerFrame";
import ItemWidth from "../../components/dashboard/Width";

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
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          py: 3,
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <ItemHeight />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <ItemWidth />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <ItemHeight />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <ItemHeight />
            </Grid>
            <Grid item lg={6} md={6} xl={8} xs={12}>
              <PerFrame />
            </Grid>
            <Grid item lg={6} md={6} xl={4} xs={12}>
              <Model1 sx={{ height: "100%" }} />
            </Grid>
            <Grid item lg={6} md={6} xl={4} xs={12}>
              <Model2 sx={{ height: "100%" }} />
            </Grid>
            <Grid item lg={6} md={6} xl={4} xs={12}>
              <Model3 />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default PageFour;
