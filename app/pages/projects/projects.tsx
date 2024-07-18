"use client";
import MoveUp from '../../components/MoveUp';
import AnimatedLink from "../../components/Link.jsx"

export default function Projects() {
    return (
        <div className="flex items-center justify-center flex-col h-screen w-full display-block">
            <MoveUp delay={0} className="mb-10 text-center h-auto flex justify-center items-center font-monosans text-2xl font-medium text-foreground subpixel-antialiased sm:text-4xl" text={"Recent Projects"}></MoveUp>

            <div className="text-center pb-10">
                <div className="text-xl sm:text-2xl font-monosans font-medium text-foreground subpixel-antialiased">
                    <MoveUp text={"Personal Portfolio (NextJS, Framer-Motion, Observer API, NextUI)"} delay={0.5} cl="text-center h-auto flex justify-center items-center "></MoveUp>
                </div>
                <div className="flex items-center flex-row justify-center text-center">
                    <div className="text-md sm:text-lg font-monosans font-regular text-foreground/40 subpixel-antialiased">
                        <MoveUp text={"2024-"} delay={1} cl="text-sm font-monosans font-regular text-foreground subpixel-antialiased text-center"></MoveUp>
                    </div>
                    <AnimatedLink delay={1} h="#" text={"Visit Here"} className="text-blue-400 hover:text-blue-400/90 duration-100 text-md sm:text-lg font-monosans font-regular outline-none "></AnimatedLink>

                </div>
            </div>
            <div className="text-center pb-10">
                <div className="text-xl sm:text-2xl font-monosans font-medium text-foreground subpixel-antialiased">
                    <MoveUp text={"Text Animations by Ignacio (NextJS, Framer-motion, Observer API)"} delay={1.2} cl="text-center h-auto flex justify-center items-center"></MoveUp>
                </div>
                <div className="flex items-center flex-row justify-center text-center">
                    <div className="text-md sm:text-lg font-monosans font-regular text-foreground/40 subpixel-antialiased">
                        <MoveUp text={"Late 2023-"} delay={1.4} cl="text-sm font-monosans font-regular text-foreground subpixel-antialiased text-center"></MoveUp>
                    </div>
                    <AnimatedLink delay={1.4} h="https://cool-text-animations.vercel.app" text={"Visit Here"} className="text-blue-400 hover:text-blue-400/90 duration-100 text-md sm:text-lg font-monosans font-regular outline-none "></AnimatedLink>

                </div>
            </div>

            <div className="text-center pb-10">
                <div className="text-xl sm:text-2xl font-monosans font-medium text-foreground subpixel-antialiased">
                    <MoveUp text={"Golden Portal (ThreeJS)"} delay={1.6} cl="text-center h-auto flex justify-center items-center"></MoveUp>
                </div>
                <div className="flex items-center flex-row justify-center text-center">
                    <div className="text-md sm:text-lg font-monosans font-regular text-foreground/40 subpixel-antialiased">
                        <MoveUp text={"2022-"} delay={1.8} cl="text-sm font-monosans font-regular text-foreground subpixel-antialiased text-center"></MoveUp>
                    </div>
                    <AnimatedLink delay={1.8} h="https://threejs-journey-portalscene.vercel.app" text={"Visit Here"} className="text-blue-400 hover:text-blue-400/90 duration-100 text-md sm:text-lg font-monosans font-regular outline-none "></AnimatedLink>

                </div>
            </div>

            <div className="text-center pb-10">
                <div className="text-xl sm:text-2xl font-monosans font-medium text-foreground subpixel-antialiased">
                    <MoveUp text={"Galaxy Generator (ThreeJS)"} delay={2} cl="text-center h-auto flex justify-center items-center"></MoveUp>
                </div>
                <div className="flex items-center flex-row justify-center text-center">
                    <div className="text-md sm:text-lg font-monosans font-regular text-foreground/40 subpixel-antialiased">
                        <MoveUp text={"2022-"} delay={2.2} cl="text-center"></MoveUp>
                    </div>
                    <AnimatedLink delay={2.2} h="https://galaxy-generator-peach.vercel.app" text={"Visit Here"} className="text-blue-400 hover:text-blue-400/90 duration-100 text-md sm:text-lg font-monosans font-regular outline-none "></AnimatedLink>
                </div>
            </div>

        </div>
    )
}
