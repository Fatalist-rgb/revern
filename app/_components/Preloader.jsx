"use client";
import { useEffect, useState } from "react";
import { BRAND } from "../_lib/content";

export default function Preloader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    document.documentElement.classList.add("no-scroll");
    const t1 = setTimeout(() => setDone(true), 1450);
    const t2 = setTimeout(() => document.documentElement.classList.remove("no-scroll"), 1550);
    return () => { clearTimeout(t1); clearTimeout(t2); document.documentElement.classList.remove("no-scroll"); };
  }, []);
  return (
    <div className={"preloader" + (done ? " done" : "")} aria-hidden="true">
      <div className="preloader-mark">
        {BRAND.split("").map((c, i) => (
          <span key={i} style={{ animationDelay: `${0.06 * i}s` }}>{c}</span>
        ))}
      </div>
      <div className="preloader-bar" />
    </div>
  );
}
