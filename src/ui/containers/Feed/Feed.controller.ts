import { FeedApplication } from "../../../application";
import Entry from "../../../domain/models/Entry/Entry";

const getPodcastList = async (): Promise<Entry[]> => {
  const podcastList = await FeedApplication.getFeed;
  console.log("From UI", podcastList);
  return podcastList;
};

export { getPodcastList };
