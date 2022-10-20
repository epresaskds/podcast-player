import React from "react";
import { useParams } from "react-router-dom";

const PodcastDetail = () => {
  const params = useParams();
  console.log("PODCAST::", params);

  return <div>Podcast # {params.podcastId}</div>;
};

export default PodcastDetail;
