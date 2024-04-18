import { useEffect } from "react";
import styled from "styled-components";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Object(props, cl, dl) {
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

    const animation = {
        hidden: {
            opacity: 0,
            y: `0.25em`,
        },
        visible: {
            opacity: 1,
            y: `0em`,
            transition: {
                delay: props.dl,
                duration: 1,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        },
    };
    return (
        <motion.div
            ref={ref}
            aria-hidden="true"
            initial="hidden"
            animate={ctrls}
            variants={animation}
            className={props.cl}>
                {props.children}
            </motion.div>
    )
}
