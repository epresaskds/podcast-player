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

const SKELLETON_DATA = {
  imageUrl: "https://via.placeholder.com/170x170.png?text=Image+not+available",
  title: "Title not available",
  author: "Author not available",
  description: "desciption not available",
};

const Sidebar = ({ imageURl, title, description, author, id }: Props) => {
  console.log("...", id);
  return (
    <Wrapper>
      <Section className="image">
        <Link to={`/podcast/${id}`}>
          <Avatar src={imageURl || SKELLETON_DATA.imageUrl} />
        </Link>
      </Section>
      <Section>
        <Title>
          <Link to={id ? `/podcast/${id}` : "/"}>
            {title || SKELLETON_DATA.title}
          </Link>
        </Title>
        <Author>by {author || SKELLETON_DATA.author}</Author>
      </Section>
      <Section>
        <DescriptionTitle>Description</DescriptionTitle>
        <Description>
          {parse(description || SKELLETON_DATA.description)}
        </Description>
      </Section>
    </Wrapper>
  );
};

export default Sidebar;
