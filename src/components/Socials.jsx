import HaveABreak from "../images/HaveABreak.avif";
import GoodBreaks from "../images/GoodBreaks.avif";
// Importing Logos
import facebook from "../images/facebook.svg";
import tiktok from "../images/tiktok.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";

function Socials() {
  return (
    <div className="w-full py-10 relative">
      <img src={GoodBreaks} className="absolute w-60 top-0 right-0" alt="" />
      <div className="text-center text-5xl font-semibold uppercase py-10 text-red-600">
        Join Us On Socials
      </div>
      <div className="flex justify-center items-center">
        <div className="flex w-[80%] justify-center gap-28 px-20 py-10 ">
          <div className="flex items-center justify-center text-white gap-20">
            <a
              href="#"
              className="bg-red-600 p-3 hover:bg-red-700 transition-all rounded-full"
            >
              <img src={facebook} className="w-8 fill-current " alt="" />
            </a>
            <a
              href="#"
              className="bg-red-600 p-3 hover:bg-red-700 transition-all rounded-full"
            >
              <img src={twitter} className="w-8 fill-current " alt="" />
            </a>
            <a
              href="#"
              className="bg-red-600 p-3 hover:bg-red-700 transition-all rounded-full"
            >
              <img src={instagram} className="w-8 fill-current " alt="" />
            </a>
            <a
              href="#"
              className="bg-red-600 p-3 hover:bg-red-700 transition-all rounded-full"
            >
              <img src={tiktok} className="w-8 fill-current " alt="" />
            </a>
          </div>
          <div className="w-64 h-64 rounded-full flex items-center justify-center bg-red-600">
            <img src={HaveABreak} className="w-52" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Socials;
