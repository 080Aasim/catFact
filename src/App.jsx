import { useState, useEffect } from "react";
import "./App.css";

// api using axios library https://catfact.ninja/fact;

import Axios from "axios";

function App() {
  const [catfact, setCatFact] = useState("");

  const handleClick = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <>
      <div>
        <button onClick={handleClick}> Generate Cat Fact</button>
        <p>{catfact}</p>
      </div>
    </>
  );
}

export default App;
