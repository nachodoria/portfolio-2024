import { useEffect } from "react";
import styled from "styled-components";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Word = styled(motion.span)`
  display: inline-block;
  margin-inline: 0.10em;
  white-space: nowrap;
`;

const Character = styled(motion.span)`
  display: inline-block;
`;

export default function Stagger(text, cl) {
  const txt = text.text;
  const cla = text.cl;

  const ctrls = useAnimation();
  
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  
  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);
  
  const wordAnimation = {
    hidden: {},
    visible: {},
  };
  
  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
        damping: 200,
        stiffness: 200
      },
    },
  };
  
  return (
    <motion.h1 aria-label={txt} className={cla}>
      {txt.split(" ").map((word, index) => {
        return (
          <Word
            ref={ref}
            aria-hidden="true"
            key={index}
            initial="hidden"
            animate={ctrls}
            variants={wordAnimation}
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.05,
            }}
          >
            {word.split("").map((character, index) => {
              return (
                <Character
                  aria-hidden="true"
                  key={index}
                  variants={characterAnimation}
                >
                  {character}
                </Character>
              );
            })}
          </Word>
        );
      })}
    </motion.h1>
  );
}
