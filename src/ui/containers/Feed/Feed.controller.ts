import { FeedApplication } from "../../../application";
import Entry from "../../../domain/models/Entry/Entry";
import { LocalStorage } from "../../../infrastructure/api/LocalStorage/LocalStorage";

const cachePodcastData = (podcastList: Entry[]) => {
  const dateOfInclusion = new Date();
  LocalStorage.set(
    "podcastList",
    JSON.stringify({
      podcastList,
      dateOfInclusion,
    })
  );
};

export const getCachedPodcastList = async (): Promise<Entry[] | undefined> => {
  const cachedData = await LocalStorage.get("podcastList");

  if (!cachedData) {
    const podcastList = await getPodcastList();
    cachePodcastData(podcastList);
    return podcastList;
  }

  const { podcastList, dateOfInclusion } = JSON.parse(cachedData);
  const differenceInDays =
    Math.ceil(new Date().getTime() - new Date(dateOfInclusion).getTime()) /
    (1000 * 3600 * 24);
  console.log("DIAS", differenceInDays);

  if (differenceInDays > 1) {
    const podcastList = await getPodcastList();
    cachePodcastData(podcastList);
    return podcastList;
  }

  return podcastList;
};

const getPodcastList = async (): Promise<Entry[]> => {
  const podcastList = await FeedApplication.getFeed;
  console.log("From UI", podcastList);
  return podcastList;
};
