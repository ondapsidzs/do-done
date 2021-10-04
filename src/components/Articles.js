import React from "react";

import ArticleItem from "./ArticleItem";
import { Container, Content } from "./styles/Articles.styles";

const Articles = ({ show }) => {
  return (
    <>
      <Container show={show}>
        <Content>
          <h1>articles</h1>
          <p>
            here are some articles you could read to make you productive and not
            just busy
          </p>
        </Content>
        <ArticleItem />
        <ArticleItem title="Article 2" />
        <ArticleItem title="Article 3" />
      </Container>
    </>
  );
};

export default Articles;
