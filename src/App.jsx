import Home from "./components/Home";
import Nav from "./components/Nav";
import Newsletter from "./components/Newsletter";
import Products from "./components/Products";
// import Products2 from "./components/Products2";

function App() {
  return (
    <div className="relative">
      <div className="sticky top-0 z-50">
        <Nav />
      </div>
      <Home />
      <section id="products" className="pt-10">
        <Products />
      </section>
      <Newsletter />
    </div>
  );
}

export default App;
