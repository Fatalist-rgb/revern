import { hero } from "../_lib/content";
import { Arrow } from "./Icons";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <picture>
        <source media="(max-width: 767px)" srcSet={hero.imgMobile} />
        <img className="hero-img rough-edges" src={hero.img} alt="" />
      </picture>
      <div className="hero-content container">
        <p className="hero-eyebrow he" style={{ animationDelay: "1.5s" }}>{hero.eyebrow}</p>
        <h1 className="he" style={{ animationDelay: "1.6s" }}>{hero.title}</h1>
        <p className="hero-sub he" style={{ animationDelay: "1.72s" }}>{hero.sub}</p>
        <div className="he" style={{ animationDelay: "1.84s" }}>
          <a className="btn btn-ghost" href="#categories">{hero.cta}<Arrow className="arr" /></a>
        </div>
      </div>
    </section>
  );
}
