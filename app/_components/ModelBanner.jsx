import { Arrow } from "./Icons";

export default function ModelBanner({ data, reverse }) {
  return (
    <section className="section">
      <div className="container">
        <div className={"tib reveal" + (reverse ? " reverse" : "")}>
          <div className="tib-media">
            <img className="rough-edges" src={data.img} alt={data.title} />
          </div>
          <div className="tib-card">
            <p className="eyebrow">{data.eyebrow}</p>
            <div className="h2">{data.title}</div>
            <p>{data.body}</p>
            <div><a className="btn btn-sand" href="#models">{data.cta}<Arrow className="arr" /></a></div>
          </div>
        </div>
      </div>
    </section>
  );
}
