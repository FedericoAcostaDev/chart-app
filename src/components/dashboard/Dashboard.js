import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router";
import {
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
} from "@material-ui/core";

export default function Dashboard(props) {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [item, setItem] = useState({});
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [perc_score_m1, setPerc_score_m1] = useState("");
  const [perc_score_m2, setPerc_score_m2] = useState("");
  const [perc_score_m3, setPerc_score_m3] = useState("");
  const [type, setType] = useState("");
  const [url_original, setUrl_original] = useState("");
  const [sector, setSector] = useState("");
  const [date, setDate] = useState("");
  const [global_txt_sal, setGlobal_txt_sal] = useState("");
  const [perc_scores_m1, setPerc_scores_m1] = useState("");
  const [perc_scores_m2, setPerc_scores_m2] = useState("");
  const [perc_scores_m3, setPerc_scores_m3] = useState("");
  const [fps, setFps] = useState("");
  const [frame_count, setFrame_count] = useState("");
  const [duration, setDuration] = useState("");

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("/page-four/" + path);
      setItem(res.data);
      setId(res.data.id);
      setName(res.data.data.name);
      setDescription(res.data.description);
      setPerc_score_m1(res.data.perc_score_m1);
      setPerc_score_m2(res.data.perc_score_m2);
      setPerc_score_m3(res.data.perc_score_m3);
      setType(res.data.type);
      setUrl_original(res.data.url_original);
      setSector(res.data.sector);
      setDate(res.data.date);
      setGlobal_txt_sal(res.data.global_txt_sal);
      setPerc_scores_m1(res.data.perc_scores_m1);
      setPerc_scores_m2(res.data.perc_scores_m2);
      setPerc_scores_m3(res.data.perc_scores_m3);
      setFps(res.data.fps);
      setFrame_count(res.data.frame_count);
      setDuration(res.data.duration);
    };
    getData();
  }, [path]);
  console.log(item);

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
              {name}
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
