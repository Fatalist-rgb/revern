import { models, modelsSection } from "../_lib/content";
import Slider from "./Slider";
import { Arrow } from "./Icons";

export default function ModelsSlider() {
  return (
    <section className="section" id="models">
      <div className="container">
        <div className="reveal">
          <Slider title={modelsSection.title} sub={modelsSection.sub} colWidth="clamp(258px, 30vw, 358px)" dots>
            {models.map((m) => (
              <a className="model-card" href="#" key={m.id}>
                <div className="model-media"><img src={m.img} alt={m.name} /></div>
                <div className="model-overlay">
                  <span className="model-tag">{m.tag}</span>
                  <h3>{m.name}</h3>
                  <p>{m.line}</p>
                  <span className="link-arrow" style={{ color: "#fff" }}>Discover <Arrow className="arr" /></span>
                </div>
              </a>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
