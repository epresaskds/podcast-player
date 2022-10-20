import { Podcast } from "../models/PodcastDetail";

export default interface PodcastRepository {
  getPodcastDetail(podcastId: string): Promise<Podcast>;
}
