"use client";
import { useState } from "react";
import { shopTheLook } from "../_lib/content";

export default function ShopTheLook() {
  const [active, setActive] = useState(null);
  const d = shopTheLook;
  return (
    <section className="section">
      <div className="container">
        <div className="stl">
          <div className="hotspot-wrap reveal">
            <img className="stl-img rough-edges" src={d.img} alt="" />
            {d.hotspots.map((h) => (
              <button
                key={h.idx}
                className={"hotspot" + (active === h.idx ? " active" : "")}
                style={{ top: `${h.top}%`, left: `${h.left}%` }}
                onMouseEnter={() => setActive(h.idx)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(h.idx)}
                aria-label={d.products[h.idx].name}
              />
            ))}
          </div>
          <div className="stl-products reveal reveal-d1">
            <h2 className="h2">{d.title}</h2>
            <div className="stl-grid">
              {d.products.map((p, i) => (
                <div
                  key={i}
                  className={"stl-item" + (active === i ? " active" : "")}
                  onMouseEnter={() => !p.noSpot && setActive(i)}
                  onMouseLeave={() => setActive(null)}
                >
                  <div className="thumb"><img src={p.img} alt={p.name} /></div>
                  <div className="meta"><strong>{p.name}</strong><span>{p.desc}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
