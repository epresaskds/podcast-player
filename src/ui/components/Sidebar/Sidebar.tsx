import React from "react";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

import {
  Wrapper,
  Section,
  Avatar,
  Title,
  Author,
  DescriptionTitle,
  Description,
} from "./Sidebar.styles";
interface Props {
  [x: string]: string;
}

const Sidebar = ({ imageURl, title, description, author, id }: Props) => {
  console.log("...", id);
  return (
    <Wrapper>
      <Section className="image">
        <Link to={`/podcast/${id}`}>
          <Avatar src={imageURl} />
        </Link>
      </Section>
      <Section>
        <Title>
          <Link to={`/podcast/${id}`}>{title}</Link>
        </Title>
        <Author>by {author}</Author>
      </Section>
      <Section>
        <DescriptionTitle>Description</DescriptionTitle>
        <Description>{parse(description)}</Description>
      </Section>
    </Wrapper>
  );
};

export default Sidebar;
