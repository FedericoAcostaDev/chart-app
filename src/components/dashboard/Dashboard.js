import React, { Component } from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
} from "@material-ui/core";

class Dashboard extends Component {
  render() {
    const { match } = this.props;
    console.log(match);
    return (
      //name item
      <Card sx={{ height: "100%" }}>
        <CardContent>
          <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
            <Grid item>
              <Typography color="textSecondary" gutterBottom variant="h6">
                Name
              </Typography>
              <Typography color="textPrimary" variant="h3">
                {match.params.item}
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{ pt: 3 }}>
            <LinearProgress value={75.5} variant="determinate" />
          </Box>
        </CardContent>
      </Card>
    );
  }
}

export default Dashboard;
