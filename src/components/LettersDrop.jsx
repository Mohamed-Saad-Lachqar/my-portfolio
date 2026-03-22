import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LettersDrop = ({
  text,
  split = "chars",
  className = "",
  start = "top 60%",
  end = "bottom 50%",
  stagger = 0.05,
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    el.innerHTML = "";

    const elements = [];
    const lines = text.split("\n");

    lines.forEach((line, i) => {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = line;

      tempDiv.childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          node.textContent.split("").forEach((char) => {
            const span = document.createElement("span");
            span.className = "char inline-block whitespace-pre"; // ✅ important
            span.textContent = char === " " ? "\u00A0" : char; // ✅ fix spaces
            el.appendChild(span);
            elements.push(span);
          });
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          const innerChars = node.textContent.split("");
          node.innerHTML = "";

          innerChars.forEach((c) => {
            const span = document.createElement("span");
            span.className = "char inline-block whitespace-pre"; // ✅ important
            span.textContent = c === " " ? "\u00A0" : c; // ✅ fix spaces
            node.appendChild(span);
            elements.push(span);
          });

          el.appendChild(node);
        }
      });

      if (i !== lines.length - 1) {
        el.appendChild(document.createElement("br"));
      }
    });

    const animation = gsap.fromTo(
      elements,
      { opacity: 0, y: -100, x: -25 },
      {
        opacity: 1,
        y: 0,
        x: 0,
        ease: "power1.out",
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          start,
          end,
          scrub: 1 
          // markers: true // uncomment for debugging
        },
      }
    );

    // ✅ cleanup (VERY important in React)
    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [text, split, start, end, stagger]);

  return <div ref={textRef} className={className} />;
};

export default LettersDrop;