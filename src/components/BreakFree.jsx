import {useRef} from "react";
import {motion, useTransform, useScroll} from "framer-motion";
import fingers from "../images/fingers.png";

function BreakFree() {
  const targetRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <div className="">
      <section ref={targetRef} className="relative h-[300vh] bg-red-white">
        <div className="sticky top-0 flex h-[screen] items-center overflow-hidden">
          <motion.div style={{x}} className="flex gap-4">
            <div className="h-screen relative font-extrabold  bg-white w-[100vw] text-[3em] md:text-[7em] text-red-600 flex justify-center items-center">
              <img
                src={fingers}
                className="absolute opacity-75 rotate-45"
                alt=""
              />
              <div className="z-10">BREAK</div>
            </div>
            <div className="h-screen relative font-extrabold   bg-red-600 w-[100vw] text-[3em] md:text-[7em] text-white flex justify-center items-center">
              <img
                src={fingers}
                className="absolute opacity-25 rotate-[15deg]"
                alt=""
              />
              <div className="z-10">FREE</div>
            </div>
            <div className="h-screen relative font-extrabold bg-white w-[100vw] text-[3em] md:text-[7em] text-red-600 flex justify-center items-center">
              <img
                src={fingers}
                className="absolute opacity-75 -rotate-45"
                alt=""
              />
              <div className="z-10">FROM</div>
            </div>
            <div className="h-screen relative font-extrabold  bg-red-600 w-[100vw] text-[3em] md:text-[7em] text-white flex justify-center items-center">
              <img
                src={fingers}
                className="absolute opacity-25 rotate-180"
                alt=""
              />
              <div className="z-10">STRESS</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default BreakFree;
