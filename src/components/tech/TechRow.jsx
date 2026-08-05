import { motion, useAnimation } from "framer-motion";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import CategoryHeader from "./CategoryHeader";
import TechBubble from "./TechBubble";

function TechRow({ category }) {
  const controls = useAnimation();

  const containerRef = useRef(null);
  const contentRef = useRef(null);

  const [overflow, setOverflow] = useState(false);

  const startAnimation = () => {
    if (!overflow || !contentRef.current) return;

    const distance = contentRef.current.scrollWidth;

    controls.start({
      x: [0, -distance],
      transition: {
        duration: distance / 35,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      },
    });
  };

  useLayoutEffect(() => {
    const checkOverflow = () => {
      if (!containerRef.current || !contentRef.current) return;

      const hasOverflow =
        contentRef.current.scrollWidth >
        containerRef.current.clientWidth;

      setOverflow(hasOverflow);
    };

    checkOverflow();

    window.addEventListener("resize", checkOverflow);

    return () =>
      window.removeEventListener(
        "resize",
        checkOverflow
      );
  }, []);

  useEffect(() => {
    controls.stop();

    if (!overflow) return;

    const timer = setTimeout(() => {
      startAnimation();
    }, 1000);

    return () => clearTimeout(timer);
  }, [overflow]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="
        border-b
        border-violet-500/15
        py-8
        last:border-none
      "
    >
      <div
        className="
          flex
          flex-col
          gap-8

          lg:flex-row
          lg:items-center
        "
      >
        <CategoryHeader category={category} />

        {/* Tech Stack */}

        <div
          ref={containerRef}
          className="flex-1 overflow-hidden"
        >
          <motion.div
            animate={controls}
            onHoverStart={() => controls.stop()}
            onHoverEnd={startAnimation}
            className="flex w-max gap-6 pb-2"
          >
            {/* Original Row */}

            <div
              ref={contentRef}
              className="flex gap-6 pt-1"
            >
              {category.technologies.map((tech, index) => (
                <TechBubble
                  key={tech.name}
                  tech={tech}
                  index={index}
                />
              ))}
            </div>

            {/* Duplicate only if needed */}

            {overflow && (
              <div className="flex gap-6">
                {category.technologies.map(
                  (tech, index) => (
                    <TechBubble
                      key={`${tech.name}-${index}-duplicate`}
                      tech={tech}
                      index={index}
                    />
                  )
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default TechRow;