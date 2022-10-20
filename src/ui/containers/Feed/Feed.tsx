import React, { useEffect, useState } from "react";
import { PodcastListView } from "../../views/PodcastList";
import { getPodcastList } from "./Feed.controller";
import Entry from "../../../domain/models/Entry/Entry";

const Feed = () => {
  const [podcastList, setPodcastList] = useState<Entry[]>([]);
  useEffect(() => {
    (async () => {
      const podcasts = await getPodcastList();
      console.log("vista");
      setPodcastList(podcasts);
    })();
  }, []);

  return <PodcastListView podcastList={podcastList}></PodcastListView>;
};

export default Feed;
