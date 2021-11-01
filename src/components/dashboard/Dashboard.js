import React, { Component } from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
} from "@material-ui/core";

/*
id
name
perc_score_m1
perc_score_m2
perc_score_m3
type
url_original
sector
date
global_txt_sal
perc_scores_m1
perc_scores_m2
perc_scores_m3
fps
frame_count
duration
*/

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
                Item ID
              </Typography>
              <Typography color="textPrimary" variant="h5">
                {match.params.id}
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
