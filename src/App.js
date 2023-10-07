import logo from "./logo.svg";
import "./App.css";

function App() {
  const rating = (stars) => "★★★★★☆☆☆☆☆".slice(5 - stars, 10 - stars);
  return (
    <div className="App">
      <h1>Star Ratings</h1>
      <p>Rating: {rating(1)}</p>
      <p>Rating: {rating(2)}</p>
      <p>Rating: {rating(3)}</p>
      <p>Rating: {rating(4)}</p>
      <p>Rating: {rating(5)}</p>
    </div>
  );
}

export default App;
