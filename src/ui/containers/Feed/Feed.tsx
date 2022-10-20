import React, { useEffect, useState } from "react";
import { PodcastListView } from "../../views/PodcastList";
import Entry from "../../../domain/models/Entry/Entry";
import { getCachedPodcastList } from "./Feed.controller";
import { usePodcast } from "../../context/Podcast.context";

const Feed = () => {
  const [podcastList, setPodcastList] = useState<Entry[]>([]);
  const { toggleLoading } = usePodcast();
  useEffect(() => {
    (async () => {
      toggleLoading(true);
      const podcasts = await getCachedPodcastList();
      if (podcasts) {
        toggleLoading(false);
        setPodcastList(podcasts);
      }
    })();
  }, [toggleLoading]);

  const { setPodcast } = usePodcast();

  const handleSelectedPodcast = (podcast: Entry) => {
    const selectedPodcastData = {
      imageURl: podcast["im:image"]?.find(
        (el) => el.attributes.height === "170"
      )?.label,
      description: podcast?.["summary"].label,
      title: podcast?.title?.label,
      id: podcast?.id?.attributes["im:id"],
      author: podcast?.["im:artist"]?.label,
    };

    if (setPodcast) {
      setPodcast(selectedPodcastData);
    }
  };

  return (
    <PodcastListView
      podcastList={podcastList}
      onSelectedPodcast={(podcast) => handleSelectedPodcast(podcast)}
    />
  );
};

export default Feed;
