import React from "react";
import Model1 from "../../components/dashboard/chart1";
import Model2 from "../../components/dashboard/chart2";
import Model3 from "../../components/dashboard/chart3";
import ItemHeight from "../../components/dashboard/height";
import PerFrame from "../../components/dashboard/PerFrame";

const PageFour = () => {
  return (
    <div>
      <h1>page four</h1>
      <ItemHeight />
      <Model1 />
      <Model2 />
      <Model3 />
      <PerFrame />
    </div>
  );
};

export default PageFour;
