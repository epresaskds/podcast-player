import { useEffect, useState } from "react";
import parse from "html-react-parser";
import { useParams } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar";
import {
  Card,
  Description,
  AudioWrapper,
  AudioPlayer,
  Wrapper,
} from "./Episode.styles";
import { usePodcast } from "../../context/Podcast.context";
import {
  getCachedEpisodeDetail,
  EpisodeDetail,
} from "../../containers/Episode/Episode.controller";

const Episode = () => {
  const params = useParams();
  const { podcastId, episodeId } = params;
  const {
    imageURl,
    description,
    title: podcastName,
    id,
    author,
  } = usePodcast();
  const [episodeDetail, setepisodeDetail] = useState<EpisodeDetail>();

  useEffect(() => {
    (async () => {
      if (podcastId && episodeId) {
        const episodeData = await getCachedEpisodeDetail(podcastId, episodeId);
        if (episodeData) {
          setepisodeDetail(episodeData);
        }
      }
    })();
  }, [episodeId, podcastId]);

  return (
    <Wrapper>
      <Sidebar
        imageURl={imageURl}
        description={description}
        title={podcastName}
        id={id}
        author={author}
      />
      <Card>
        <h3>{episodeDetail?.trackName}</h3>
        {episodeDetail && (
          <Description>{parse(episodeDetail?.description)}</Description>
        )}
        <AudioWrapper>
          <AudioPlayer src={episodeDetail?.episodeUrl} controls></AudioPlayer>
        </AudioWrapper>
      </Card>
    </Wrapper>
  );
};

export default Episode;
