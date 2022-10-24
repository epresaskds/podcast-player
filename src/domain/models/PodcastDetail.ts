interface genresItemType {
  name: string;
  id: string;
}

export interface Podcast {
  resultCount: number;
  results: PodcastDetail[];
}
export interface PodcastDetail {
  country: string;
  contentAdvisoryRating: string;
  trackViewUrl: string;
  artworkUrl60: string;
  artistViewUrl: string;
  episodeUrl: string;
  previewUrl: string;
  feedUrl: string;
  closedCaptioning: string;
  collectionId: number;
  collectionName: string;
  artistIds: Array<number>;
  genres: Array<genresItemType>;
  episodeGuid: string;
  description: string;
  trackId: number;
  trackName: string;
  shortDescription: string;
  releaseDate: string;
  kind: string;
  wrapperType: string;
  artworkUrl160: string;
  episodeFileExtension: string;
  episodeContentType: string;
  artworkUrl600: string;
  collectionViewUrl: string;
  trackTimeMillis: number;
}
