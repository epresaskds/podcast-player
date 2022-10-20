import React from "react";
import { Wrapper, Avatar, Title, Author } from "./Card.styles";
import { CardProps } from "../_types/Card";

const Card = ({ title, imgUrl, author }: CardProps) => {
  return (
    <Wrapper data-testid="card">
      <Avatar src={imgUrl} />
      <Title>{title}</Title>
      <Author>Author: {author}</Author>
    </Wrapper>
  );
};

export default Card;
