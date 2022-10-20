import { PodcastApplication } from "../../../application";
import { Podcast, PodcastDetail } from "../../../domain/models/PodcastDetail";

import { LocalStorage } from "../../../infrastructure/api/LocalStorage/LocalStorage";

export interface EpisodeDetail
  extends Pick<
    PodcastDetail,
    "description" | "trackId" | "episodeUrl" | "trackName"
  > {}

const cachePodcastData = (podcastId: string, podcastDetail: Podcast) => {
  const dateOfInclusion = new Date();
  LocalStorage.set(
    "podcastDetail",
    JSON.stringify({
      podcastId,
      podcastDetail,
      dateOfInclusion,
    })
  );
};

export const getCachedEpisodeDetail = async (
  podcastId: string,
  episodeId: string
): Promise<EpisodeDetail> => {
  const cachedData = await LocalStorage.get("podcastDetail");
  if (!cachedData) {
    const podcastDetail = await getPodcastDetail(podcastId);
    cachePodcastData(podcastId, podcastDetail);
  }

  const { podcastDetail } = JSON.parse(cachedData!);
  const episode = podcastDetail.results.find((result: any) => {
    return result.trackId === +episodeId;
  });

  const episodeDetail = getEpisodeDetail(episode);

  return episodeDetail;
};

const getEpisodeDetail = (episode: any) => ({
  trackName: episode.trackName,
  description: episode.description,
  episodeUrl: episode.episodeUrl,
  trackId: episode.trackId,
});

const getPodcastDetail = async (podcastId: string): Promise<Podcast> => {
  const podcastDetail = await PodcastApplication.getPodcast(podcastId);
  return podcastDetail;
};
