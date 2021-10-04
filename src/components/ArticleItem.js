import React from "react";

import { Container, Title, Description } from "./styles/ArticleItem.styles";

const ArticleItem = ({ title, description }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

Title.defaultProps = {
  children: "Article Title",
};
Description.defaultProps = {
  children:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam excepturi vitae laborum facilis inventore nobis deserunt laudantium! Itaque, consequatur.",
};

export default ArticleItem;
