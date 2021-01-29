import React, { useState, useEffect } from "react";

import Loading from "./Loading";
import CovidMap from "./CovidMap";
import LoadWardsTask from "../tasks/LoadWardsTask";
import Legend from "./Legend";
import legendItems from "../entities/LegendItems";

const Covid19 = () => {
  const [wards, setWards] = useState([]);

  const legendItemsReverse = [...legendItems].reverse();

  const load = () => {
    console.log("load");
    const loadWardsTask = new LoadWardsTask();
    loadWardsTask.load((wards) => setWards(wards));
  };

  useEffect(load, []);

  return (
    <div>
      {wards.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <CovidMap wards={wards} />
          <Legend legendItems={legendItemsReverse} />
        </div>
      )}
    </div>
  );
};

export default Covid19;
