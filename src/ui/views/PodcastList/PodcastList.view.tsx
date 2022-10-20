import React from "react";
import { Image } from "../../../domain/models/Entry/Image";
import { Card } from "../../components/Card";
import { PodcastListProps } from "../_types/PodcastListView";
import { Grid } from "./PodcasList.view.styles";

const PodcastListView = ({ podcastList }: PodcastListProps) => {
  return (
    <Grid>
      {podcastList.map((podcast) => (
        <Card
          key={podcast.id.attributes["im:id"]}
          imgUrl={
            podcast["im:image"].find(
              (el: Image) => el.attributes.height === "170"
            )?.label
          }
          author={podcast["im:artist"].label}
          title={podcast["im:name"].label}
        />
      ))}
    </Grid>
  );
};

export default PodcastListView;
