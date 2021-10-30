import React from "react";

import GaleryVideos from "../../components/Galery/GaleryVideos";
import Galery from "../../components/Galery/Galery";
import Input from "../../components/Input";
const PageThree = (props) => {
  return (
    <div
      style={{
        marginTop: "5vh",
      }}
    >
      <Input />
      <GaleryVideos />
      <Galery />
    </div>
  );
};

export default PageThree;
