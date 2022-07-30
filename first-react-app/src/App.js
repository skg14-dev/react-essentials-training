import './App.css';
import { useEffect, useState } from "react";

const query = `query { 
  allLifts {
    name
    elevationGain
    status
  }
}`

const opts = {
  method: "POST",
  headers: {
    "Content-Type":"application/json"
  },
  body: JSON.stringify({query})
}

function GitHubUser({username, location, avatar}){
  return (
    <div>
      <h1>{username}</h1>
      <p>{location}</p>
      <img src={avatar} alt="avatar" height={150}/>
    </div>
  );
}

function Lift({name, elevationGain, status}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{elevationGain}</p>
      <p><b>{status}</b></p>
    </div>
  )
}

function App() {
  const [data, setData]= useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    // fetch(`https://api.github.com/users/skg14-dev`)
    fetch(`https://snowtooth.moonhighway.com/`, opts)
    .then((respnse) => respnse.json())
    .then(setData)
    .then(() => setLoading(false))
    .catch(setError);
  },[]);
  if (loading) {
    return <h1>Loading..</h1>
  }
  if (error) {
    return <pre>{JSON.stringify(error)}</pre>
  }
  // if(data){
  //   return <GitHubUser username={data.login} location={data.location} avatar={data.avatar_url}/>
  // }  
  if(data){
    return <div>
      {data.data.allLifts.map((lift) => (
        <Lift name={lift.name} elevationGain={lift.elevationGain} status={lift.status} />
      ))}
      </div>
  }
  else{
    return null;
  }
}

export default App;
