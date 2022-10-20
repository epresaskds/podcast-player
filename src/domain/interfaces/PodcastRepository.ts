import PodcastDetail from "../models/PodcastDetail";

export default interface PodcastRepository {
  getPodcastDetail(): Promise<PodcastDetail>;
}
