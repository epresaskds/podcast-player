import FeedRepository from "../../../domain/interfaces/FeedRepository";
import { fetchApi } from "../../api/fetch/fetchApi";

const URL =
  "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";
const proxiedUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(
  URL
)}`;

const ApiFeedRepository: FeedRepository = {
  getPodcastList: async () => {
    try {
      const responseData = await fetchApi.get(proxiedUrl);
      return JSON.parse(responseData?.contents)?.feed?.entry;
    } catch (error) {
      console.error(error);
    }
  },
};

export default ApiFeedRepository;
