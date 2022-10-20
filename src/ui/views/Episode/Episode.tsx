import React from "react";
import { useParams } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar";

const Episode = () => {
  const params = useParams();
  console.log("Episode::", params);

  return (
    <div>
      <Sidebar src="https://via.placeholder.com/150" />
      Episode
    </div>
  );
};

export default Episode;
