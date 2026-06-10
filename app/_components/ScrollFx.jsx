"use client";
import { useEffect } from "react";

export default function ScrollFx() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const list = () => Array.from(document.querySelectorAll(".reveal:not(.is-in)"));
    const check = () => {
      const h = window.innerHeight || document.documentElement.clientHeight;
      for (const el of list()) {
        const r = el.getBoundingClientRect();
        if (r.top < h * 0.9 && r.bottom > 0) el.classList.add("is-in");
      }
    };
    check();
    let io;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (ents) => ents.forEach((e) => e.isIntersecting && e.target.classList.add("is-in")),
        { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
      );
      list().forEach((el) => io.observe(el));
    }
    const onScroll = () => check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    // fallback for renderers that throttle rAF / IO
    const iv = setInterval(check, 400);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      clearInterval(iv);
      io && io.disconnect();
    };
  }, []);
  return null;
}
