import { statement } from "../_lib/content";

export default function BrandStatement() {
  return (
    <section className="section">
      <div className="container">
        <div className="statement">
          <h2 className="h2 reveal">{statement.title}</h2>
          <p className="statement-body reveal reveal-d1">{statement.body}</p>
        </div>
      </div>
    </section>
  );
}
