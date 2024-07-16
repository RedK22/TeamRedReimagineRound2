import Home from "./components/Home";
import Nav from "./components/Nav";
import Newsletter from "./components/Newsletter";
import Products from "./components/Products";
import Socials from "./components/Socials";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BreakFree from "./components/BreakFree";

function App() {
  return (
    <div className="relative">
      <div className="">
        <Nav />
      </div>
      <Home />
      <BreakFree />
      <section id="products" className="pt-12">
        <Products />
      </section>
      <section id="news" className="pt-12">
        <Newsletter />
      </section>
      <Socials />
      <section id="faq" className="pt-12">
        <Faq />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
