import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import {
  Podcast as PodcastResult,
  PodcastDetail,
} from "../../../domain/models/PodcastDetail";
import { usePodcast } from "../../context/Podcast.context";
import PodcastView from "../../views/Podcast/Podcast.view";

import { getCachedPodcastDetail, filterInfo } from "./Podcast.controller";

const Podcast = () => {
  const { podcastId } = useParams();
  const [podcastDetail, setPodcastDetail] = useState<PodcastResult>();
  const [totalEpisodes, setTotalEpisodes] = useState(0);
  const [episodeList, setEpisodeList] = useState<PodcastDetail[]>([]);
  const { toggleLoading } = usePodcast();

  const getEpisodes = (rawInfo: PodcastResult) => {
    const detail = filterInfo(rawInfo, "podcastEpisode");

    setEpisodeList(detail);
  };

  const getPodcastInfo = useCallback(async () => {
    toggleLoading(true);
    let podcastDetail;
    if (podcastId) {
      podcastDetail = await getCachedPodcastDetail(podcastId);
    }

    if (podcastDetail) {
      toggleLoading(false);
      setPodcastDetail(podcastDetail);
      setTotalEpisodes(podcastDetail.resultCount - 1);
    }
  }, [podcastId, toggleLoading]);

  useEffect(() => {
    getPodcastInfo();
  }, [getPodcastInfo]);

  useEffect(() => {
    if (podcastDetail) {
      getEpisodes(podcastDetail);
    }
  }, [podcastDetail]);

  return <PodcastView episodeCount={totalEpisodes} episodes={episodeList} />;
};

export default Podcast;
