import FeedRepository from "../../domain/interfaces/FeedRepository";

export const GetFeed = (repository: FeedRepository) =>
  repository.getPodcastList();
