import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [data, setData]= useState(null);
  useEffect(()=>{
    fetch(`https://api.github.com/users/skg14-dev`)
    .then((respnse) => respnse.json())
    .then(data => setData(data));
  },[]);
  if(data){
    return <pre>{JSON.stringify(data,null,2)}</pre>
  }
}

export default App;
