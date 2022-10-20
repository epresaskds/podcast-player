import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  padding: 20px;
  align-items: flex-start;
`;

export const Card = styled.div.attrs(() => ({ "data-testid": "episode-card" }))`
  border-radius: 5px;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.2);
  border: 2px solid var(--color-gray-light);
  background-color: var(--color-white);
  padding: 30px 20px;
  max-width: 760px;
  margin-left: 60px;
`;

export const Description = styled.p`
  font-size: 14px;
  white-space: pre-wrap;
`;

export const AudioWrapper = styled.div`
  padding-top: 30px;
  border-top: 2px solid var(--color-gray-light);
`;

export const AudioPlayer = styled.audio.attrs(({ src, controls }) => ({
  src,
  controls,
}))`
  width: 100%;
  &::-webkit-media-controls-panel {
    border-radius: none;
  }
`;
