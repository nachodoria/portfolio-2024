"use client";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Stagger from "../../components/Stagger.js"
import Ease from "../../components/Ease"
import MoveUp from '../../components/MoveUp';
import Object from "@/app/components/Object.jsx";
import { extendVariants, Input, Button } from "@nextui-org/react";



const MyInput = extendVariants(Input, {
    variants: {
        color: {
            stone: {
                inputWrapper: [
                    "border-foreground/50",
                ],
            },
        },

    },
    defaultVariants: {
        color: "stone",
    },
});

export default function Contact() {

    const [email, setEmail] = useState('');
    const [idea, setIdea] = useState('');
    const [name, setName] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);

    const handleEmailChange = (value: string) => {
        setEmail(value);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(value);

        setIsValidEmail(isValid);
    };

    const handleIdeaChange = (value: string) => {
        setIdea(value);
    };
    const handleNameChange = (name: string) => {
        setName(name);
    };
4


    const form = useRef<HTMLFormElement>(null);


    function sendEmail(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (form.current) {
            emailjs.send("service_73bx1vo", "template_ofpzphh", {
                from_name: name,
                message: idea,
                from_mail: email,
            }, {
                publicKey: 'QezxDBoP7eT1OHqgu'

            }
            )
        }
    };
    return (
        <div className="flex items-center justify-center flex-col h-screen w-full">
            <div className="w-full px-16 flex items-start flex-col justify-between sm:w-1/2 sm:px-0 ">
                <MoveUp delay={0.5} text="Ready to innovate? Contact me 📫" className="pb-3 text-left font-monosans font-medium text-xl text-foreground subpixel-antialiased w-full sm:text-4xl" ></MoveUp>
                <MoveUp delay={0.7} text="I am open to creative and cooperative work. " className="sm:pb-4 text-left font-monosans font-medium text-lg text-foreground/70 subpixel-antialiased sm:text-2xl" ></MoveUp>
                <form onSubmit={sendEmail} ref={form} className='w-full'>
                    <Object dl={1.5} cl="w-full">
                        <MyInput type="text" name="user_name" onValueChange={handleNameChange} value={name} className="w-10/12 sm:w-6/12 pt-5 sm:pt-8" variant="bordered" size="lg" label="Name"></MyInput>
                    </Object>
                    <Object dl={1.5} cl="w-full">
                        <MyInput type="email" name="user_email" onValueChange={handleEmailChange} value={email} isInvalid={isValidEmail ? false : true} errorMessage={isValidEmail ? "" : "Please enter a valid email"} className="w-10/12 sm:w-6/12 pt-5 sm:pt-8 " variant="bordered" size="lg" label="Email"></MyInput>
                    </Object>
                    <Object dl={1.7} cl="w-full">
                        <MyInput name="message" onValueChange={handleIdeaChange} value={idea} className="w-full sm:w-9/12 pt-4 sm:pt-8" variant="bordered" size="lg" label="Your Idea"></MyInput>
                    </Object>
                    <Object dl={2}>
                        <Button type="submit" value="Send" color="primary" className="mt-4 sm:mt-8" size="lg">Send your Idea</Button>
                    </Object>
                </form>
                <div className="flex items-start justify-start flex-col pt-6 w-full lg:flex-row lg:items-center ">
                    <MoveUp delay={2} text="Or just email me at" className="pr-2 min-w-32 text-left font-monosans font-medium text-md text-foreground/70 subpixel-antialiased sm:text-lg"></MoveUp>
                    <Object dl={2}>
                        <a className="text-left font-monosans font-medium text-md text-foreground/50 subpixel-antialiased hover:text-foreground/90 duration-250 sm:text-lg" href="mailto:ignaciodoria01@gmail.com">ignaciodoria01@gmail.com</a>
                    </Object>
                </div>
                <MoveUp delay={2.7} text="All rights reserved © Ignacio Doria Oberman 2024" className="pt-4 text-left font-monosans font-medium text-sm text-foreground/70 subpixel-antialiased sm:text-lg" ></MoveUp>
            </div>
        </div>
    );
}