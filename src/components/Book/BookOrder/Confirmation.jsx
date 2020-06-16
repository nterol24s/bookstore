import React from "react";
import { animated, useTransition } from "react-spring";

import styles from "./book_order.module.scss";

function Confirmation({ confirmation, children }) {
  const transition = useTransition(confirmation, confirmation => confirmation, {
    from: { opacity: 0, transform: "translate3d(-50%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(50%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(100%,0,0)" },
  });

  return transition.map(
    ({ item, key, props }) =>
      item && (
        <animated.div
          key={key}
          style={{
            border: "1px solid slategray",
            position: "absolute",
            ...props,
          }}
        >
          <div className={styles.confirmationContainer}>{children}</div>
        </animated.div>
      ),
  );
}

export default Confirmation;
