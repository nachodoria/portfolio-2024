"use client";
import Stagger from "../../components/Stagger.js"
import Ease from "../../components/Ease"
import MoveUp from '../../components/MoveUp';
import Object from "@/app/components/Object.jsx";
import { Button } from "@nextui-org/react";

export default function Home() {
    function openPage() {
        window.open("https://www.linkedin.com/in/ignacio-doria-oberman-459b33267/");
    }
    return (
        <div className="relative h-screen w-full">
            <Object dl={2}>
                <div className="absolute right-10 top-10 font-monosans font-medium text-lg text-foreground subpixel-antialiased pb-6 md:text-xl">📍Toronto, Canada</div>
            </Object>
            <div className="flex items-start justify-start flex-col h-screen w-full  pl-10 ">
                <div className="flex w-4/6 h-screen flex-col items-start justify-center">
                    <div className="flex flex-row items-center justify-center pb-4 ">
                        <Stagger delay={0.5} text={"Hey! I'm Ignacio"} cl="text-left h-auto font-monosans font-medium text-xl text-foreground subpixel-antialiased md:text-2xl"></Stagger>
                        <Object dl={1.2} cl="pl-2">
                            <span>👋</span>
                        </Object>
                    </div>
                    <Ease delay={1.6} cl="text-left h-auto w-full flex justify-center items-center font-monosans font-medium text-4xl text-foreground subpixel-antialiased md:text-6xl" text="A dedicated Computer Science student with a passion for coding, aspiring to become a Software Engineer."></Ease>
                    <Object dl={2} cl="block">
                        <Button target="_blank" onPress={openPage} size="lg" color="primary" className="mt-10">Let's Talk</Button>
                    </Object>
                    <Object dl={3} cl="absolute bottom-32 md:bottom-10">
                        <div className="hidden text-center h-auto font-monosans font-medium text-lg text-foreground subpixel-antialiased sm:block">Scroll to get started  ⬇️</div>
                    </Object>
                </div>
            </div>
        </div>
    );
}
