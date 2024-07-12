import kitkatlogo from "../images/KitKatLogo.png";

function Nav() {
  return (
    <div className="w-full bg-red-600 px-8 py-1  text-white flex items-center gap-10">
      <a href="#">
        <img className="w-24" src={kitkatlogo} alt="" />
      </a>
      <ul className="flex gap-12 tracking-tighter font-semibold text-xl uppercase">
        <a className="abtn px-2" href="#">
          Products
        </a>
        <a className="abtn px-2" href="#">
          About
        </a>
        <a className="abtn px-2" href="#">
          Contact Us
        </a>
      </ul>
    </div>
  );
}

export default Nav;
