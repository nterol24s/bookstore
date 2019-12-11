import React from "react";

export const Moji = ({ moji, type }) => (
  <span role="img" aria-label={type}>
    {moji}
  </span>
);
