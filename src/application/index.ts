import { ApiFeedRepository } from "../infrastructure/repositories/ApiFeedRepository";
import { ApiPodcastRepository } from "../infrastructure/repositories/ApiPodcastRepository";
import { GetFeed } from "./GetFeed/GetFeed";
import { GetPodcast } from "./GetPodcast/GetPodcast";

const FeedApplication = {
  getFeed: GetFeed(ApiFeedRepository),
};
const PodcastApplication = {
  getPodcast: (podcastId: string) =>
    GetPodcast(ApiPodcastRepository, podcastId),
};

export { FeedApplication, PodcastApplication };
