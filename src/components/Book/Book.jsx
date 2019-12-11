import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import {
  Container,
  Title,
  Description,
  Author,
  Tag,
  Tags,
  Info,
  Price,
  QButton,
} from "./styles";
import { Moji } from "../Common/common";
import { Flex } from "../Common/styles";

function Book({
  book: { title, id, author, description = "", price, tag = "tag" },
}) {
  const { removeBook, addBook } = useContext(CartContext);

  return (
    <Container>
      <Title>
        <Moji moji="📕" type="close book" />
        {title}
      </Title>
      <div>
        <Author>{author}</Author>
        <Description>{description}</Description>
      </div>
      <Tags>
        <Tag>{tag}</Tag>
      </Tags>
      <Info>
        <Price>{price}</Price>
      </Info>
      <Flex>
        <QButton minus onClick={() => removeBook(id)}>
          -
        </QButton>
        <QButton onClick={() => addBook(id)}>+</QButton>
      </Flex>
    </Container>
  );
}

export default Book;
