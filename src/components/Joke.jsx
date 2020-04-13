import React from "react";

import useDadjoke from "../hooks/useDadJokes";

function Joke() {
  const { dadJoke, err, handleDadJokes } = useDadjoke();
  return (
    <div onClick={() => handleDadJokes()}>
      {!err && !dadJoke && "Hey ! Wanna hear a joke ?"}
      {dadJoke && !err && dadJoke}
      {err && "Too bad there ain't none"}
    </div>
  );
}

export default Joke;
