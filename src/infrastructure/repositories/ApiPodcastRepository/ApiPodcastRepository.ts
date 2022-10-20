import PodcastRepository from "../../../domain/interfaces/PodcastRepository";
import { fetchApi } from "../../api/fetch/fetchApi";

const URL = "https://itunes.apple.com/lookup?id=";
const queryParams = "&media=podcast&entity=podcastEpisode";

const ApiPodcastRepository: PodcastRepository = {
  getPodcastDetail: async (podcastId) => {
    try {
      const proxiedUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(
        `${URL}${podcastId}${queryParams}`
      )}`;

      const responseData = await fetchApi.get(proxiedUrl);
      return JSON.parse(responseData?.contents);
    } catch (error) {
      console.error(error);
    }
  },
};

export default ApiPodcastRepository;
