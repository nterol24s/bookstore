import React, { Suspense, useState } from "react";

import "./App.css";

const MessageDisplayer = React.lazy(() =>
  import("./components/MessageDisplayer"),
);

function App() {
  const [message, setMessage] = useState("");
  const [dadJoke, setDadJoke] = useState("");
  const [err, setError] = useState("");

  const handleClick = async () => {
    try {
      const res = await fetch("/.netlify/functions/hello");

      const { message } = await res.json();

      setMessage(message);
    } catch (err) {
      setError(err);
    }
  };

  const handleDadJokes = async () => {
    try {
      const res = await fetch("/.netlify/functions/dadJokes");
      const { joke } = await res.json();

      setDadJoke(joke);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>Aller go</button>
        <div>
          <Suspense fallback={<h1>Chargement du bonjour....</h1>}>
            {(message || err) && <MessageDisplayer message={message || err} />}
          </Suspense>
        </div>
        <div>
          <button onClick={handleDadJokes}>Get a DAD JOKE !</button>
          <Suspense fallback={<h1>Chargement des blagues....</h1>}>
            {(dadJoke || err) && <MessageDisplayer message={dadJoke || err} />}
          </Suspense>
        </div>
      </header>
    </div>
  );
}

export default App;
