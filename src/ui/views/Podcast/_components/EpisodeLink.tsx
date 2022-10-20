import { Link } from "react-router-dom";

const EpisodeLink = (props: any) => {
  return <Link to={`episode/${props.data.trackId}`}>{props.value}</Link>;
};

export default EpisodeLink;
