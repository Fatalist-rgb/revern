import { categories } from "../_lib/content";
import Slider from "./Slider";
import { Arrow } from "./Icons";

export default function CategoryTeaser() {
  return (
    <section className="section" id="categories">
      <div className="container">
        <div className="teaser">
          <div className="teaser-head reveal">
            <p className="eyebrow">Shop</p>
            <h2 className="h2">{categories.title}</h2>
            <p>{categories.sub}</p>
            <a className="link-arrow" href="#categories">View all <Arrow className="arr" /></a>
          </div>
          <div className="reveal reveal-d1">
            <Slider colWidth="clamp(186px, 20vw, 232px)" dots={false}>
              {categories.items.map((c) => (
                <a className="ccard" href="#" key={c.label}>
                  <img src={c.img} alt={c.label} />
                  <span className="ccard-label">{c.label}</span>
                </a>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
