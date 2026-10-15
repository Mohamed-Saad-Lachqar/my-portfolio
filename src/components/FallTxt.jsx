import React from 'react'
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);
export default function FallTxt({ children, delay = 0, color = "#5B4DF4" }) {

    const elementRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        if (!elementRef.current || !textRef.current) return;

        const element = elementRef.current;
        const text = textRef.current;

        const ctx = gsap.context(() => {
            let colorBoxes = [];
            const split = new SplitText(text, { type: "words" });
            const words = split.words;

            colorBoxes = words.map((word) => {
                gsap.set(word, {
                    display: "inline-block",
                    position: "relative",
                })

                const wordRect = word.getBoundingClientRect();

                const colorBox = document.createElement("div");
                colorBox.style.position = "absolute";
                colorBox.style.top = "0";
                colorBox.style.left = "50%";
                colorBox.style.transform = "translateX(-50%)";
                colorBox.style.zIndex = "10";
                colorBox.style.width = `${wordRect.width *1.05}px`;
                colorBox.style.height = `${wordRect.height * 0.7}px`;
                colorBox.style.background = color;
                colorBox.style.borderRadius = ".5vw";
                colorBox.style.pointerEvents = "none";

                word.appendChild(colorBox);

                return colorBox


            })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    end: "bottom 30%"
                },
                delay: delay,
                onComplete: () => {
                    colorBoxes.forEach((box) => {
                        box.style.display = "none";
                    })
                }
            })

            tl.to(colorBoxes, {
                y: () => gsap.utils.random(1200, 1600),
                X: () => gsap.utils.random(-150, 150),
                rotation: () => gsap.utils.random(-360, 360),
                duration: 1,
                ease: "power2.in",
                stagger: 0.02,
            })
        }, elementRef);

        return ()=> ctx.revert();
    },[color,delay]);



    return (
        <div ref={elementRef} >
            <div ref={textRef} >{children}</div>
        </div>
    )
}
