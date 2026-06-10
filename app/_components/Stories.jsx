import { stories } from "../_lib/content";

export default function Stories() {
  return (
    <section className="section" id="stories">
      <div className="container">
        <div className="stories-head">
          <div className="reveal">
            <p className="eyebrow">Journal</p>
            <h2 className="h2">{stories.title}</h2>
          </div>
          <p className="reveal reveal-d1">{stories.sub}</p>
        </div>
        <div className="stories-grid">
          {stories.items.map((s, i) => (
            <a className="story reveal" style={{ transitionDelay: `${i * 0.1}s` }} href="#" key={i}>
              <div className="story-media">
                <span className="story-tag">{s.tag}</span>
                <img className="rough-edges" src={s.img} alt={s.title} />
              </div>
              <div className="story-date">{s.date}</div>
              <h3>{s.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
