import { useEffect } from "react";
import styled from "styled-components";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "@nextui-org/react";

const Word = styled(motion.span)`
  display: inline-block;
  margin-right: 0.25em;
  white-space: nowrap;
`;

const Character = styled(motion.span)`
  display: inline-block;
  margin-right: -0.05em;
`;

export default function AnimatedLink(text, className, delay, h) {
    const txt = text.text;
    const cl = text.className;
    const dl = text.delay;
    const href = text.h;

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


    const characterAnimation = {
        hidden: {
            opacity: 0,
            y: `0.25em`,
        },
        visible: {
            opacity: 1,
            y: `0em`,
            transition: {
                delay: dl,
                duration: 1,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        },
    };

    return (
        <motion.div className={cl} ref={ref}
            aria-hidden="true"
            key={txt}
            initial="hidden"
            animate={ctrls}
            variants={characterAnimation}>
            <Link target="_blank" color="primary" href={href}>
                {txt}
            </Link>
        </motion.div>
    );
}
