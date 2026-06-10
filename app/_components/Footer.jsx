import { BRAND, footer } from "../_lib/content";
import { social as S } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand">{BRAND}</span>
            <p>{footer.tagline}</p>
            <div className="footer-contact">
              <a href={`mailto:${footer.contact.email}`}>{footer.contact.email}</a><br />
              <a href={`tel:${footer.contact.phone.replace(/\s/g, "")}`}>{footer.contact.phone}</a><br />
              <span>{footer.contact.hours}</span>
            </div>
            <div className="footer-social">
              {footer.social.map((n) => { const I = S[n]; return <a key={n} href="#" aria-label={n}>{I && <I />}</a>; })}
            </div>
          </div>
          {footer.columns.map((c) => (
            <div className="footer-col" key={c.h}>
              <h4>{c.h}</h4>
              {c.links.map((l) => <a href="#" key={l}>{l}</a>)}
            </div>
          ))}
        </div>
        <div className="footer-pay">
          <span style={{ fontSize: ".72rem", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ink-soft)", marginRight: ".4rem" }}>Secure payment</span>
          {footer.pay.map((p, i) => <img key={i} src={p} alt="" />)}
        </div>
        <p className="footer-legal-note">{footer.legal}</p>
        <div className="footer-bottom">
          <span>© 2026 {BRAND}. Designed &amp; built by Paliy.</span>
          <div className="fb-links">{footer.bottomLinks.map((l) => <a href="#" key={l}>{l}</a>)}</div>
        </div>
      </div>
    </footer>
  );
}
