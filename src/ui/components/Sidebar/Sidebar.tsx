import React from "react";
import {
  Wrapper,
  Section,
  Avatar,
  Title,
  Author,
  Description,
} from "./Sidebar.styles";
interface Props {
  src: string;
}

const Sidebar = ({ src }: Props) => {
  return (
    <Wrapper>
      <Section>
        <Avatar src={src} />
      </Section>
      <Section>
        <Title></Title>
        <Author></Author>
      </Section>
      <Section>
        <Description></Description>
      </Section>
    </Wrapper>
  );
};

export default Sidebar;
