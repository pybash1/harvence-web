"use client";

import { useEffect, useRef, useState } from "react";

export const CursorTrailer = () => {
  const trailer = useRef<HTMLDivElement>(null);

  const [text, setText] = useState("");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      trailer.current?.animate(
        {
          transform: `translate(${e.clientX - (trailer.current?.offsetWidth ?? 0) / 2}px, ${e.clientY - (trailer.current?.offsetHeight ?? 0) / 2}px)`,
        },
        {
          duration: 800,
          fill: "forwards",
        },
      );

      const hovering = document.elementFromPoint(e.clientX, e.clientY);
      if (hovering?.getAttribute("data-hover-text")) {
        setText(hovering.getAttribute("data-hover-text")!);
      } else {
        setText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={`pointer-events-none fixed left-0 top-0 z-[9999] hidden rounded-full bg-black transition-all ease-in-out lg:block ${text ? "h-10 w-fit px-4 py-2 text-white" : "h-3 w-3"}`}
      ref={trailer}
    >
      {text}
    </div>
  );
};
