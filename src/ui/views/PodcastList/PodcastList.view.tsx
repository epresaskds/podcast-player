import { Image } from "../../../domain/models/Entry/Image";
import { Card } from "../../components/Card";
import { PodcastListProps } from "../_types/PodcastListView";
import { Grid, LinkWrapper, Wrapper } from "./PodcasList.view.styles";

const PodcastListView = ({ podcastList }: PodcastListProps) => {
  return (
    <Wrapper>
      <Grid>
        {podcastList.map((podcast) => (
          <LinkWrapper
            key={podcast.id.attributes["im:id"]}
            to={`podcast/${podcast.id.attributes["im:id"]}`}
          >
            <Card
              imgUrl={
                podcast["im:image"].find(
                  (el: Image) => el.attributes.height === "170"
                )?.label
              }
              author={podcast["im:artist"].label}
              title={podcast["im:name"].label}
            />
          </LinkWrapper>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default PodcastListView;
