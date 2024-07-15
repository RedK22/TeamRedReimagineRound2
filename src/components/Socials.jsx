import HaveABreak from "../images/HaveABreak.avif";
import GoodBreaks from "../images/GoodBreaks.avif";
// Importing Logos
import facebook from "../images/facebook.svg";
import tiktok from "../images/tiktok.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";

function Socials() {
  return (
    <div className="w-full py-10 relative ">
      <img src={GoodBreaks} className="absolute w-60 top-0 right-0" alt="" />

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 w-[80%] place-items-center  px-20 py-10 ">
          <div>
            <div className="text-center text-4xl font-semibold uppercase py-10 text-red-600">
              Join Us On Socials
            </div>
            {/* Social Icons */}
            <div className="flex items-center justify-center gap-10">
              <a
                href="#"
                className="bg-red-600 p-3 hover:scale-110 hover:translate-y-[-15px] shadow-md hover:bg-[#ff3030] transition-all rounded-full"
              >
                <img src={facebook} className="w-8 fill-current " alt="" />
              </a>
              <a
                href="#"
                className="bg-red-600 p-3 hover:scale-110 hover:translate-y-[-15px] shadow-md hover:bg-[#ff3030] transition-all rounded-full"
              >
                <img src={twitter} className="w-8 fill-current " alt="" />
              </a>
              <a
                href="#"
                className="bg-red-600 p-3 hover:scale-110 hover:translate-y-[-15px] shadow-md hover:bg-[#ff3030] transition-all rounded-full"
              >
                <img src={instagram} className="w-8 fill-current " alt="" />
              </a>
              <a
                href="#"
                className="bg-red-600 p-3 hover:scale-110 hover:translate-y-[-15px] shadow-md hover:bg-[#ff3030] transition-all rounded-full"
              >
                <img src={tiktok} className="w-8 fill-current " alt="" />
              </a>
            </div>
          </div>
          <div className="w-72 h-72 shadow-lg  rounded-full flex items-center justify-center bg-red-600">
            <img src={HaveABreak} className="w-52" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Socials;
