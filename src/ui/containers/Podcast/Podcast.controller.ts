import { PodcastApplication } from "../../../application";
import { Podcast, PodcastDetail } from "../../../domain/models/PodcastDetail";

import { LocalStorage } from "../../../infrastructure/api/LocalStorage/LocalStorage";

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

export const getCachedPodcastDetail = async (
  podcastId: string
): Promise<Podcast> => {
  const cachedData = await LocalStorage.get("podcastDetail");

  if (!cachedData) {
    const podcastDetail = await getPodcastDetail(podcastId);
    cachePodcastData(podcastId, podcastDetail);
    return podcastDetail;
  }

  const {
    podcastDetail,
    dateOfInclusion,
    podcastId: cachedPodcastId,
  } = JSON.parse(cachedData);
  const differenceInDays = Math.abs(
    Math.ceil(new Date().getTime() - new Date(dateOfInclusion).getTime()) /
      (1000 * 3600 * 24)
  );
  console.log("DIAS", differenceInDays);

  if (differenceInDays > 1 || cachedPodcastId !== podcastId) {
    const podcastDetail = await getPodcastDetail(podcastId);
    cachePodcastData(podcastId, podcastDetail);
    return podcastDetail;
  }

  return podcastDetail;
};

const getPodcastDetail = async (podcastId: string): Promise<Podcast> => {
  const podcastDetail = await PodcastApplication.getPodcast(podcastId);
  console.log("From UI", podcastDetail);
  return podcastDetail;
};

export const filterInfo = (rawData: Podcast, paramType: string) =>
  rawData?.results.filter(
    ({ wrapperType }: PodcastDetail) => wrapperType === paramType
  );
