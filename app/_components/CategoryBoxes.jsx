import { categoryBoxes } from "../_lib/content";
import { Plus } from "./Icons";

export default function CategoryBoxes() {
  return (
    <section className="section">
      <div className="container">
        <div className="cat-boxes">
          {categoryBoxes.map((b, i) => (
            <a className="cat-box reveal" style={{ transitionDelay: `${i * 0.08}s` }} key={b.title} href="#categories">
              <img className="rough-edges" src={b.img} alt={b.title} />
              <div className="cat-box-title">
                <span>{b.title}</span>
                <span className="plus"><Plus /></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
