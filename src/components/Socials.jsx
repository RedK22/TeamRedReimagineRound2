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
    <div className="w-full py-10 relative ">
      <img src={GoodBreaks} className="absolute w-60 top-0 right-0" alt="" />

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 w-[80%] place-items-center  px-20 py-10 ">
          <div>
            <Reveal>
              <div className="text-center text-4xl font-semibold uppercase py-10 text-red-600">
                Join Us On Socials
              </div>
            </Reveal>
            {/* Social Icons */}
            <RevealY>
              <div className="flex items-center justify-center gap-10">
                <a
                  href="https://www.facebook.com/kitkatUK"
                  target="_blank"
                  className="bg-red-600 p-3 hover:scale-110 hover:translate-y-[-15px] shadow-md hover:bg-[#ff3030] transition-all rounded-full"
                >
                  <img src={facebook} className="w-8 fill-current " alt="" />
                </a>
                <a
                  href="https://twitter.com/KITKAT"
                  target="_blank"
                  className="bg-red-600 p-3 hover:scale-110 hover:translate-y-[-15px] shadow-md hover:bg-[#ff3030] transition-all rounded-full"
                >
                  <img src={twitter} className="w-8 fill-current " alt="" />
                </a>
                <a
                  href="https://www.instagram.com/kitkat/"
                  target="_blank"
                  className="bg-red-600 p-3 hover:scale-110 hover:translate-y-[-15px] shadow-md hover:bg-[#ff3030] transition-all rounded-full"
                >
                  <img src={instagram} className="w-8 fill-current " alt="" />
                </a>
                <a
                  href="https://www.tiktok.com/@kitkat"
                  target="_blank"
                  className="bg-red-600 p-3 hover:scale-110 hover:translate-y-[-15px] shadow-md hover:bg-[#ff3030] transition-all rounded-full"
                >
                  <img src={tiktok} className="w-8 fill-current " alt="" />
                </a>
              </div>
            </RevealY>
          </div>
          <motion.div
            ref={ref}
            animate={isInView ? {rotate: 360, transition: {duration: 1}} : {}}
            className="w-72 h-72 shadow-lg  rounded-full flex items-center justify-center bg-red-600"
          >
            <img src={HaveABreak} className="w-52" alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Socials;
