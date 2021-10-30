import React from "react";
import {} from "@material-ui/core";
import GaleryVideos from "../../components/Galery/GaleryVideos";
import Input from "../../components/Input";
const PageOne = (props) => {
  return (
    <div
      style={{
        marginTop: "5vh",
      }}
    >
      <Input />
      <GaleryVideos />
    </div>
  );
};

export default PageOne;
