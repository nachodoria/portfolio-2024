"use client"; // This is a client component 👈🏽
import { useAnimation, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Ease({ text, delay, cl  }) {
    const controls = useAnimation();

    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: true

    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
        if (!inView) {
            controls.start("hidden");
        }
    }, [controls, inView]);

    const easeIn = {
        hidden: {
            opacity: 0,
            transition: { duration: 1.5, ease: [0.2, 0.65, 0.3, 0.9] }

        },
        visible: {
            opacity: 1,
            transition: {
                delay: delay,
                duration: 1.5, ease: [0.2, 0.65, 0.3, 0.9],
                damping: 300,
                stiffness: 100
            }

        }
    }

    return (
        <>
  
            <motion.div
                className={cl}>
                    <motion.h1
                        initial="hidden"
                        animate={controls}
                        variants={easeIn}
                        transition={{ duration: .5, ease: [0.2, 0.65, 0.3, 0.9] }}
                        ref={ref}
                    >
                        {text}
                    </motion.h1>

            </motion.div >

        </>
    )
}
