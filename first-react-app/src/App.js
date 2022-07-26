import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [emotion,setEmotion] = useState("happy");
  useEffect(()=> {

    console.log(`Its ${emotion}`);
  },[emotion]);
  return (
    <div className='App'>
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>sad</button>
    </div>
  );
}

export default App;
