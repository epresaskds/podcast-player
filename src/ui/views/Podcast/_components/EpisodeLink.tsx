import { Link } from "react-router-dom";

const EpisodeLink = (props: any) => {
  console.log("TABLA", props.data.trackId);
  return <Link to={`episode/${props.data.trackId}`}>{props.value}</Link>;
};

export default EpisodeLink;
