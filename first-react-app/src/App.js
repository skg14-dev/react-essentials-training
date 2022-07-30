import './App.css';
import { useEffect, useState } from "react";

const tahoo_peeks = [
  { name : "Freel", elevation: 1234},
  { name : "Pyramid", elevation: 5678}
]

function List({data, renderItem, renderEmpty}) {
  return !data.length ? (renderEmpty) : 
  (
    <ul>
      {data.map((item) => (
        <li key={item.name}>{renderItem(item)}</li>
      ))}
    </ul>
  )
} 

function App() {
  return(
    <List data={tahoo_peeks} renderEmpty={<p>List is empty</p>} renderItem={(item) =>
    (<>
      {item.name} -{item.elevation}
    </>)} />
  )
}

export default App;
