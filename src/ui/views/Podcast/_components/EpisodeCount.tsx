import styled from "styled-components";
import EpisodeCountProps from "../../_types/EpisodeCount";

export const Wrapper = styled.div`
  border-radius: 5px;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.2);
  padding: 10px;
`;
export const Title = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const EpisodeCount = ({ episodeCount }: EpisodeCountProps) => {
  return (
    <Wrapper>
      <Title>Episodes: {episodeCount}</Title>
    </Wrapper>
  );
};

export default EpisodeCount;
