import { PodcastDetail } from "../../../domain/models/PodcastDetail";

interface Episode
  extends Pick<
    PodcastDetail,
    "trackName" | "releaseDate" | "trackTimeMillis" | "trackId"
  > {}

export default interface EpisodeListProps {
  episodes: Episode[] | undefined;
}
