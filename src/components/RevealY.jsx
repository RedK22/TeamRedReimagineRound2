import {useRef, useEffect} from "react";
import {motion, useInView, useAnimation} from "framer-motion";

function RevealY({children}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      // Animate
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div>
      <motion.div
        ref={ref}
        variants={{
          hidden: {opacity: 0, y: 75},
          visible: {opacity: 1, y: 0},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration: 0.6, delay: 0.3}}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default RevealY;
