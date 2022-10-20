import { Sidebar } from "../../components/Sidebar";
import { PodcastProps } from "../_types/PodcastView";
import EpisodeCount from "./_components/EpisodeCount";
import EpisodeList from "./_components/EpisodeList";
import { usePodcast } from "../../context/Podcast.context";
import { Wrapper, Content } from "./Podcast.styles";

const PodcastView = ({ episodes, episodeCount }: PodcastProps) => {
  const { imageURl, description, title, id, author } = usePodcast();
  return (
    <Wrapper>
      <Sidebar
        imageURl={imageURl}
        description={description}
        title={title}
        id={id}
        author={author}
      />
      <Content>
        <EpisodeCount episodeCount={episodeCount} />
        <EpisodeList episodes={episodes} />
      </Content>
    </Wrapper>
  );
};

export default PodcastView;
