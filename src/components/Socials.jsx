import HaveABreak from "../images/HaveABreak.avif";
import GoodBreaks from "../images/GoodBreaks.avif";
// Importing Logos
import facebook from "../images/facebook.svg";
import tiktok from "../images/tiktok.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
import RevealY from "./RevealY";
import Reveal from "./Reveal";

import {useRef} from "react";
import {motion, useInView} from "framer-motion";

function Socials() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  return (
    <div className="w-full py-10 relative">
      {/* <img
        src={GoodBreaks}
        className="hidden md:block absolute w-60 top-0 right-0"
        alt=""
      /> */}

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 gap-10 md:gap-0 md:grid-cols-2 w-[80%] place-items-center px-10 md:px-20 py-5 md:py-10 ">
          <div>
            <Reveal>
              <div className="text-center w-full text-3xl md:text-4xl font-bold uppercase py-2 mb-8 md:mb-0 md:py-10 text-red-600">
                Join Us On Socials
              </div>
            </Reveal>
            {/* Social Icons */}
            <RevealY>
              <div className="flex flex-wrap items-center justify-center gap-10">
                <a
                  href="https://www.facebook.com/kitkatUK"
                  target="_blank"
                  className="bg-red-600  p-4 md:p-3 hover:scale-110 hover:translate-y-[-15px] shadow-md hover:bg-[#ff3030] transition-all rounded-full"
                >
                  <img
                    src={facebook}
                    className="md:w-8 w-6 fill-current "
                    alt=""
                  />
                </a>
                <a
                  href="https://twitter.com/KITKAT"
                  target="_blank"
                  className="bg-red-600 p-4 md:p-3 hover:scale-110 hover:translate-y-[-15px] shadow-md hover:bg-[#ff3030] transition-all rounded-full"
                >
                  <img
                    src={twitter}
                    className="md:w-8 w-6 fill-current "
                    alt=""
                  />
                </a>
                <a
                  href="https://www.instagram.com/kitkat/"
                  target="_blank"
                  className="bg-red-600 p-4 md:p-3 hover:scale-110 hover:translate-y-[-15px] shadow-md hover:bg-[#ff3030] transition-all rounded-full"
                >
                  <img
                    src={instagram}
                    className="md:w-8 w-6 fill-current "
                    alt=""
                  />
                </a>
                <a
                  href="https://www.tiktok.com/@kitkat"
                  target="_blank"
                  className="bg-red-600 p-4 md:p-3 hover:scale-110 hover:translate-y-[-15px] shadow-md hover:bg-[#ff3030] transition-all rounded-full"
                >
                  <img
                    src={tiktok}
                    className="md:w-8 w-6 fill-current "
                    alt=""
                  />
                </a>
              </div>
            </RevealY>
          </div>

          {/* Image */}
          <motion.div
            ref={ref}
            animate={
              isInView
                ? {rotate: 360, transition: {duration: 1, delay: 0.5}}
                : {}
            }
            className="w-40 h-40 md:w-72 md:h-72 shadow-lg  rounded-full flex items-center justify-center bg-red-600"
          >
            <img src={HaveABreak} className="w-32 md:w-52" alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Socials;
