import React from "react";
import { Container } from "@material-ui/core";
import GaleryVideos from "../../components/Galery/GaleryVideos";
import Galery from "../../components/Galery/Galery";
import Input from "../../components/Input";
const PageThree = (props) => {
  return (
    <Container
      style={{
        marginTop: "5vh",
      }}
    >
      <Input />
      <GaleryVideos />
      <Galery />
    </Container>
  );
};

export default PageThree;
