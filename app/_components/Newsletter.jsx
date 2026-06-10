"use client";
import { useState } from "react";
import { newsletter } from "../_lib/content";
import { Arrow } from "./Icons";

export default function Newsletter() {
  const [sent, setSent] = useState(false);
  return (
    <section className="section">
      <div className="container">
        <div className="newsletter reveal">
          <div className="newsletter-inner">
            <h2 className="h2">{newsletter.title}</h2>
            <p>{newsletter.body}</p>
            {sent ? (
              <p style={{ color: "var(--sand)", fontWeight: 600, fontSize: "1.05rem" }}>Thank you — please check your inbox to confirm.</p>
            ) : (
              <form className="nl-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <input type="email" required placeholder={newsletter.placeholder} aria-label="Email address" />
                <button className="btn btn-sand" type="submit">{newsletter.cta}<Arrow className="arr" /></button>
              </form>
            )}
            <p className="nl-note">{newsletter.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
