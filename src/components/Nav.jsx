import kitkatlogo from "../images/KitKatLogo.png";
import Reveal from "./Reveal";

function Nav() {
  return (
    <div className="  w-full bg-red-600 px-8 py-1 shadow-lg text-white flex items-center gap-10">
      <a href="#">
        <img className="w-24" src={kitkatlogo} alt="" />
      </a>

      <ul className="flex gap-12 tracking-tighter font-semibold text-xl uppercase">
        <Reveal>
          <a className="abtn px-2" href="#products">
            Products
          </a>
        </Reveal>
        <Reveal>
          <a className="abtn px-2" href="#news">
            News
          </a>
        </Reveal>
        <Reveal>
          <a className="abtn px-2" href="#faq">
            FAQ
          </a>
        </Reveal>
        <Reveal>
          <a className="abtn px-2" href="#contact">
            Contact Us
          </a>
        </Reveal>
      </ul>
    </div>
  );
}

export default Nav;
