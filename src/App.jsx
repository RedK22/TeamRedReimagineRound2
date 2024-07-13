import Home from "./components/Home";
import Nav from "./components/Nav";
import Newsletter from "./components/Newsletter";
import Products from "./components/Products";
import Socials from "./components/Socials";
import Faq from "./components/Faq";
// import Products2 from "./components/Products2";

function App() {
  return (
    <div className="relative">
      <div className="sticky top-0 z-50">
        <Nav />
      </div>
      <Home />
      <section id="products" className="pt-12">
        <Products />
      </section>
      <section id="faq" className="pt-12">
        <Faq />
      </section>
      <Socials />
      <section id="news">
        <Newsletter />
      </section>
    </div>
  );
}

export default App;
