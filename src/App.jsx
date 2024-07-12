import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="relative">
      <div className="sticky top-0 z-50">
        <Nav />
      </div>
      <Home />
      <Home />
      <Home />
      <Home />
    </div>
  );
}

export default App;
