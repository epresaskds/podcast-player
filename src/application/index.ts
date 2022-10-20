import { ApiFeedRepository } from "../infrastructure/repositories/ApiFeedRepository";
import { GetFeed } from "./GetFeed/GetFeed";

export const FeedApplication = {
  getFeed: GetFeed(ApiFeedRepository),
};
