import kitkatlogo from "../images/KitKatLogo.png";

function Nav() {
  return (
    <div className="w-full bg-red-600 px-8 py-1 shadow-lg text-white flex items-center gap-10">
      <a href="#">
        <img className="w-24" src={kitkatlogo} alt="" />
      </a>
      <ul className="flex gap-12 tracking-tighter font-semibold text-xl uppercase">
        <a className="abtn px-2" href="#products">
          Products
        </a>
        <a className="abtn px-2" href="#news">
          News
        </a>
        <a className="abtn px-2" href="#faq">
          FAQ
        </a>
        <a className="abtn px-2" href="#contact">
          Contact Us
        </a>
      </ul>
    </div>
  );
}

export default Nav;
