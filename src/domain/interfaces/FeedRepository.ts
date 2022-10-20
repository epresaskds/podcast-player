import Entry from "../models/Entry/Entry";

export default interface FeedRepository {
  getPodcastList(): Promise<Entry[]>;
}
