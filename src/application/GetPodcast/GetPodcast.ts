import PodcastRepository from "../../domain/interfaces/PodcastRepository";

export const GetPodcast = (repository: PodcastRepository, podcastId: string) =>
  repository.getPodcastDetail(podcastId);
