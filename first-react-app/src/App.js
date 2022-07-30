import './App.css';
import { useEffect, useState } from "react";

function GitHubUser({username, location, avatar}){
  return (
    <div>
      <h1>{username}</h1>
      <p>{location}</p>
      <img src={avatar} alt="avatar" height={150}/>
    </div>
  );
}

function App() {
  const [data, setData]= useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/skg14-dev`)
    .then((respnse) => respnse.json())
    .then(setData)
    .then(() => setLoading(false))
    .catch(setError);
  },[]);
  if (error) {
    return <pre>{JSON.stringify(error)}</pre>
  }
  if(data){
    return <GitHubUser username={data.login} location={data.location} avatar={data.avatar_url}/>
  }
  else{
    return null;
  }
}

export default App;
