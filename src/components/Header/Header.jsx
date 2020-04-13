import React from "react";

import styles from './styles.module.scss';
import { Moji } from "../Common/common";

const Header = () => (
  <div className={styles.title}>
    <Moji type="livre" moji="📖" />
    La bouquinerie
  </div>
);

export default Header;
