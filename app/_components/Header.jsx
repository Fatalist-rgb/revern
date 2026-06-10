"use client";
import { useEffect, useState } from "react";
import { BRAND, announce, nav } from "../_lib/content";
import { Chevron, Search, User, Heart, Cart, Close } from "./Icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [acc, setAcc] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("no-scroll", open);
  }, [open]);

  return (
    <header className={"header " + (scrolled ? "solid" : "transparent")}>
      <div className="header-top">{announce}</div>
      <div className="header-bar">
        <div className="header-main">
          <a href="#top" className="brand">{BRAND}</a>
          <nav className="nav">
            {nav.map((item) => (
              <div className="nav-item" key={item.label}>
                <a className="nav-link" href={item.href}>
                  {item.label}
                  {item.mega && <Chevron className="chev" />}
                </a>
                {item.mega && (
                  <div className="mega">
                    <div className="mega-inner">
                      {item.mega.map((col) => (
                        <div className="mega-col" key={col.h}>
                          <h4>{col.h}</h4>
                          {col.links.map((l) => <a href="#" key={l}>{l}</a>)}
                        </div>
                      ))}
                      {item.feature && (
                        <div className="mega-feature">
                          <img src={item.feature.img} alt="" />
                          <div className="mf-body">
                            <div style={{ fontWeight: 700, textTransform: "uppercase", letterSpacing: ".02em" }}>{item.feature.t}</div>
                            <div style={{ fontSize: ".88rem", color: "rgba(255,255,255,.75)", marginTop: ".3rem" }}>{item.feature.s}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="header-icons">
            <button className="icon-btn icon-desktop" aria-label="Search"><Search /></button>
            <button className="icon-btn icon-desktop" aria-label="Account"><User /></button>
            <button className="icon-btn icon-desktop" aria-label="Wishlist"><Heart /></button>
            <button className="icon-btn" aria-label="Cart"><Cart /><span className="cart-count">0</span></button>
            <button className="burger" aria-label="Menu" onClick={() => setOpen(true)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </div>

      {/* mobile drawer */}
      <div className={"mobile-drawer" + (open ? " open" : "")}>
        <div className="md-head">
          <span className="brand" style={{ color: "var(--ink)" }}>{BRAND}</span>
          <button className="icon-btn" aria-label="Close" onClick={() => setOpen(false)}><Close /></button>
        </div>
        <nav className="mobile-nav">
          {nav.map((item) =>
            item.mega ? (
              <div key={item.label}>
                <button className="mobile-acc-trigger" onClick={() => setAcc(acc === item.label ? null : item.label)}>
                  {item.label}<Chevron style={{ transform: acc === item.label ? "rotate(180deg)" : "none", transition: ".3s" }} />
                </button>
                <div className={"mobile-sub" + (acc === item.label ? " open" : "")}>
                  {item.mega.flatMap((c) => c.links).map((l) => <a href="#" key={l} onClick={() => setOpen(false)}>{l}</a>)}
                </div>
              </div>
            ) : (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
