import "./App.css";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>My Website</h1>
    </div>
  );
}
export function About() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>About us</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
      </nav>
      <h1>Contact us</h1>
    </div>
  );
}

export function App() {
  return <Home />;
}
