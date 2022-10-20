import styled from "styled-components";
interface ImageProps {
  src: string;
}
const TruncatedText = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`;

export const Wrapper = styled.div`
  border-radius: 5px;
  height: 100px;
  position: relative;
  box-shadow: 0 2px 5px 0 #ccc;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 20px 20px;
`;

export const Avatar = styled.img.attrs(({ src }: ImageProps) => ({
  src: src,
}))`
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);
  width: 80px;
`;

export const Title = styled(TruncatedText)`
  color: var(--color-black);
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 4px;
  font-size: 14px;
`;

export const Author = styled(TruncatedText)`
  font-size: 12px;
  color: var(--color-gray-medium);
`;
