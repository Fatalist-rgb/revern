import { deals } from "../_lib/content";
import Slider from "./Slider";
import { Heart } from "./Icons";

export default function DealsSlider() {
  return (
    <section className="section">
      <div className="container">
        <div className="deals-banner reveal"><img src={deals.banner} alt={deals.title} /></div>
        <div className="reveal reveal-d1">
          <Slider colWidth="clamp(218px, 24vw, 268px)" dots>
            {deals.items.map((p, i) => (
              <article className="pcard" key={i}>
                <div className="pcard-media">
                  <span className="badge-sale">{p.off}</span>
                  <button className="badge-wish" aria-label="Add to wishlist"><Heart /></button>
                  <img className="img-front" src={p.front} alt={p.name} />
                  <img className="img-back" src={p.back} alt="" />
                </div>
                <div className="pcard-body">
                  <span className="pcard-cat">{p.cat}</span>
                  <h3 className="pcard-name">{p.name}</h3>
                  <div className="pcard-price">
                    <span className="price-now">€{p.now}</span>
                    <span className="price-old">€{p.old}</span>
                  </div>
                  <span className="pcard-tax">incl. VAT, plus shipping</span>
                </div>
              </article>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
