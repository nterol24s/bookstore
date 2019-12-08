import React, {useState} from 'react';

import './App.css';

function App() {
const [message, setMessage] = useState("");
const [dadJoke, setDadJoke] = useState("");
const [err, setError]= useState("");

  const handleClick = async () => {
    try {
      const res = await fetch("http://localhost:9000/.netlify/functions/hello");
      const {message} = await res.json();
      setMessage(message);

    } catch (err) {
      setError(err);
    }
  }

  const handleDadJokes = async () => {
    try {
      const res = await fetch("http://localhost:9000/.netlify/functions/dadJokes")
      const {joke} = await res.json();
      setDadJoke(joke)
    } catch (err) {
      setError(err)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>Aller go</button>
        <div>
          {message && <span>{message}</span>}
          {err && <span>there was an error : {err}</span>}
        </div>
        <div><button onClick={handleDadJokes}>Get a DAD JOKE !</button></div>
  <div>{dadJoke}</div>
  <div>{err}</div>
      </header>
    </div>
  );
}

export default App;