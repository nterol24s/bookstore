import { useState } from "react";

function useDadJokes() {
  const [dadJoke, setDadJoke] = useState("");
  const [err, setError] = useState("");

  const handleDadJokes = async () => {
    try {
      const res = await fetch("/.netlify/functions/dadJokes");
      const { joke } = await res.json();

      setDadJoke(joke);
    } catch (err) {
      setError(err);
    }
  };

  return { err, dadJoke, handleDadJokes };
}

export default useDadJokes;
