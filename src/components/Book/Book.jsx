import React, { useState } from "react";
import styled from "styled-components";

import styles from "./book.module.scss";
import common from "../Common/common.module.scss";
import { Moji } from "../Common/common";
import c from "classnames";

import BookOrder from "./BookOrder/BookOrder";

export const DescriptionContainer = styled.p`
  font-weight: 400;
  line-height: 1.35;
  max-width: 60%;
  overflow: hidden;
  text-overflow: ellipsis;
  height: ${props => (props.open ? "128px" : "64px")};
  width: 80%;
  transition: all 0.2s ease-in;
`;

const Description = ({ author, description }) => {
  const [longDescription, setLongDescription] = useState(false);
  return (
    <main>
      <p className={styles.author}>{author}</p>
      <DescriptionContainer open={longDescription}>
        {description}
      </DescriptionContainer>
      <button
        className={c(common.baseButton, styles.smallButton)}
        onClick={() => setLongDescription(!longDescription)}
      >
        Afficher {longDescription ? "moins" : "plus"}
      </button>
    </main>
  );
};

const Header = ({ title, tag }) => {
  return (
    <header>
      <h2 className={styles.title}>
        <Moji moji="📕" type="close book" />
        {title}
      </h2>
      <p className={styles.tag}>{tag}</p>
    </header>
  );
};

function Book({ book: { title, id, author, description, price, tag } }) {
  const formatPrice = price.replace(".", ",");

  return (
    <article className={`${common.container} ${styles.container}`}>
      <Header tag={tag} title={title} />
      <Description author={author} description={description} />
      <div className={styles.info}>
        <p className={styles.price}>{formatPrice} €</p>
      </div>
      <BookOrder id={id} />
    </article>
  );
}

export default Book;
