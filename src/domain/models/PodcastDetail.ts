// export default interface PodcastDetail {
//   artistName: string;
//   artworkUrl100: string;
//   artworkUrl30: string;
//   artworkUrl60: string;
//   artworkUrl600: string;
//   collectionCensoredName: string;
//   collectionExplicitness: string;
//   collectionHdPrice: number;
//   collectionId: number;
//   collectionName: string;
//   collectionPrice: number;
//   collectionViewUrl: string;
//   country: string;
//   currency: string;
//   feedUrl: string;
//   genreIds: string[];
//   genres: string[];
//   kind: string;
//   primaryGenreName: string;
//   releaseDate: Date;
//   trackCensoredName: string;
//   trackCount: number;
//   trackExplicitness: string;
//   trackHdPrice: number;
//   trackHdRentalPrice: number;
//   trackId: number;
//   trackName: string;
//   trackPrice: number;
//   trackRentalPrice: number;
//   trackViewUrl: string;
//   wrapperType: string;
// }

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
