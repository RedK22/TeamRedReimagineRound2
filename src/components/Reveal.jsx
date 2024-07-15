import {useRef, useEffect} from "react";
import {motion, useInView, useAnimation} from "framer-motion";

function Reveal({children}) {
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
          hidden: {opacity: 0, x: 50},
          visible: {opacity: 1, x: 0},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration: 0.5, delay: 0.25}}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Reveal;
