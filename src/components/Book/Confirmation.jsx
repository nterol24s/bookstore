import React from "react";
import { animated, useTransition } from "react-spring";

import { ConfirmationContainer } from "./styles";

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
          style={{ border: "1px solid red", position: "absolute", ...props }}
        >
          <ConfirmationContainer>{children}</ConfirmationContainer>
        </animated.div>
      ),
  );
}

export default Confirmation;
