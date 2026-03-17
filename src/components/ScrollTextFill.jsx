import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollTextFill = ({
  text,
  split = "chars",
  className = "",
  start = "top 80%",
  end = "bottom 60%",
  stagger = 0.05,
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    el.innerHTML = "";

    const elements = [];

    const lines = text.split("\n");

    lines.forEach((line, i) => {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = line;

      tempDiv.childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          // Split text nodes into chars
          node.textContent.split("").forEach((char) => {
            const span = document.createElement("span");
            span.className = "char";
            span.textContent = char;
            el.appendChild(span);
            elements.push(span);
          });
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          // Wrap each character inside element with .char too
          const innerChars = node.textContent.split("");
          node.innerHTML = ""; // clear text
          innerChars.forEach((c) => {
            const span = document.createElement("span");
            span.className = "char";
            span.textContent = c;
            node.appendChild(span);
            elements.push(span); // add each char for GSAP
          });
          el.appendChild(node);
        }
      });

      if (i !== lines.length - 1) {
        el.appendChild(document.createElement("br"));
      }
    });

    gsap.set(elements, { opacity: 0.2 });

    gsap.to(elements, {
      opacity: 1,
      ease: "power1.out",
      stagger: stagger,
      scrollTrigger: {
        trigger: el,
        start,
        end,
        scrub: true,
      },
    });
  }, [text, split, start, end, stagger]);

  return <div ref={textRef} className={`scroll-text-fill ${className}`} />;
};

export default ScrollTextFill;