import Entry from "../../../domain/models/Entry/Entry";

export interface PodcastListProps {
  podcastList: any[];
  onSelectedPodcast: (podcast: Entry) => void;
  inputValue: string;
  onFilter: any;
}
