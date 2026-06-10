"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowL, ArrowR } from "./Icons";

export default function Slider({ children, title, sub, colWidth = "280px", dots = true, className = "", id }) {
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [pages, setPages] = useState(1);
  const [active, setActive] = useState(0);

  const update = () => {
    const t = trackRef.current;
    if (!t) return;
    const max = t.scrollWidth - t.clientWidth;
    setCanPrev(t.scrollLeft > 6);
    setCanNext(t.scrollLeft < max - 6);
    const p = Math.max(1, Math.round(t.scrollWidth / t.clientWidth));
    setPages(p);
    setActive(max > 0 ? Math.round((t.scrollLeft / max) * (p - 1)) : 0);
  };

  useEffect(() => {
    update();
    const t = trackRef.current;
    if (!t) return;
    t.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { t.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);

  const step = (dir) => {
    const t = trackRef.current;
    if (!t) return;
    const first = t.firstElementChild;
    const w = first ? first.getBoundingClientRect().width + 18 : t.clientWidth * 0.85;
    t.scrollBy({ left: dir * w, behavior: "smooth" });
  };
  const toPage = (i) => {
    const t = trackRef.current;
    if (!t) return;
    const max = t.scrollWidth - t.clientWidth;
    t.scrollTo({ left: (max * i) / Math.max(1, pages - 1), behavior: "smooth" });
  };

  // drag to scroll
  const drag = useRef({ down: false, x: 0, left: 0, moved: false });
  const onDown = (e) => {
    const t = trackRef.current;
    drag.current = { down: true, x: e.clientX, left: t.scrollLeft, moved: false };
  };
  const onMove = (e) => {
    if (!drag.current.down) return;
    const dx = e.clientX - drag.current.x;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    trackRef.current.scrollLeft = drag.current.left - dx;
  };
  const onUp = () => { drag.current.down = false; };

  return (
    <div className={"slider " + className} id={id}>
      <div className="slider-head">
        <div>
          {title && <h2 className="h2" style={{ color: "var(--ink)" }}>{title}</h2>}
          {sub && <p style={{ color: "var(--ink-soft)", fontWeight: 300, marginTop: ".5rem" }}>{sub}</p>}
        </div>
        <div className="slider-ctrls">
          <button className="slider-arrow" onClick={() => step(-1)} disabled={!canPrev} aria-label="Previous"><ArrowL /></button>
          <button className="slider-arrow" onClick={() => step(1)} disabled={!canNext} aria-label="Next"><ArrowR /></button>
        </div>
      </div>
      <div
        className="slider-track"
        ref={trackRef}
        style={{ "--col-w": colWidth }}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerLeave={onUp}
      >
        {children}
      </div>
      {dots && pages > 1 && (
        <div className="slider-dots">
          {Array.from({ length: pages }).map((_, i) => (
            <button key={i} className={i === active ? "active" : ""} onClick={() => toPage(i)} aria-label={`Go to ${i + 1}`} />
          ))}
        </div>
      )}
    </div>
  );
}
