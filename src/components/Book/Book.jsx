import React, { Suspense, useContext, useState } from "react";

import CartContext from "../../context/CartContext";
import {
  Container,
  Title,
  Description,
  Author,
  Tag,
  Info,
  Price,
  QButton,
  SmallButton,
  OrderContainer,
} from "./styles";
import { Moji } from "../Common/common";
import { Flex } from "../Common/styles";

import useSelfUntoggle from "../../hooks/useSelfUntoggle";

const Confirmation = React.lazy(() => import("./Confirmation"));

function Book({ book: { title, id, author, description, price, tag } }) {
  const [longDescription, setLongDescription] = useState(false);

  const { removeBook, addBook } = useContext(CartContext);

  const [confirmation, handleConfirmation] = useSelfUntoggle(3000);

  const handleAddBook = () => {
    addBook(id);
    handleConfirmation();
  };

  return (
    <Container>
      <Title>
        <Moji moji="📕" type="close book" />
        {title}
      </Title>
      <Flex>
        <Tag>{tag}</Tag>
      </Flex>
      <div>
        <Author>{author}</Author>
        <Description open={longDescription}>{description}</Description>
        <SmallButton onClick={() => setLongDescription(!longDescription)}>
          Afficher {longDescription ? "moins" : "plus"}
        </SmallButton>
      </div>

      <Info>
        <Price>{price}</Price>
      </Info>
      <OrderContainer>
        <QButton minus onClick={() => removeBook(id)}>
          -
        </QButton>
        <QButton onClick={handleAddBook}>+</QButton>
        <div
          style={{
            position: "relative",
            marginLeft: "12px",
            height: "42px",
            width: "100%",
          }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Confirmation confirmation={confirmation}>
              Le livre a bien été ajouté panier !
            </Confirmation>
          </Suspense>
        </div>
      </OrderContainer>
    </Container>
  );
}

export default Book;
