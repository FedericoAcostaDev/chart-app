import React from "react";
import { Container } from "@material-ui/core";
import GaleryVideos from "../../components/Galery/GaleryVideos";
import Galery from "../../components/Galery/Galery";
const PageThree = (props) => {
  return (
    <Container
      style={{
        marginTop: "5vh",
      }}
    >
      <GaleryVideos />
      <Galery />
    </Container>
  );
};

export default PageThree;
