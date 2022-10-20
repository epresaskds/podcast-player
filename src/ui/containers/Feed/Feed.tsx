import React, { useEffect, useState } from "react";
import { PodcastListView } from "../../views/PodcastList";
import Entry from "../../../domain/models/Entry/Entry";
import { getCachedPodcastList } from "./Feed.controller";
import { usePodcast } from "../../context/Podcast.context";

const Feed = () => {
  const [podcastList, setPodcastList] = useState<Entry[]>([]);
  const [filteredList, setFilteredList] = useState<Entry[]>([]);
  const [inputValue, setInputValue] = useState("");
  const { toggleLoading } = usePodcast();
  useEffect(() => {
    (async () => {
      toggleLoading(true);
      const podcasts = await getCachedPodcastList();
      if (podcasts) {
        toggleLoading(false);
        setPodcastList(podcasts);
        setFilteredList(podcasts);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const handleFilterList = (e: React.FormEvent<HTMLInputElement>) => {
    const searchTerm = e.currentTarget.value;
    const filteredList = podcastList.filter((podcast) => {
      const title = podcast["im:name"].label.toLowerCase();
      const artist = podcast["im:artist"].label.toLowerCase();
      // debugger;
      return artist.includes(searchTerm) || title.includes(searchTerm);
    });
    setInputValue(searchTerm);
    setFilteredList(filteredList);
  };

  return (
    <PodcastListView
      podcastList={filteredList}
      onSelectedPodcast={(podcast) => handleSelectedPodcast(podcast)}
      inputValue={inputValue}
      onFilter={handleFilterList}
    />
  );
};

export default Feed;
