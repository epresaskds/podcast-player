import { PodcastDetail } from "../../../domain/models/PodcastDetail";

export interface PodcastProps {
  episodes: PodcastDetail[] | undefined;
  episodeCount: number;
}
