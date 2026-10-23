export type FaqEntry = { q: string; a: string };

type FaqSectionProps = {
  title: string;
  id?: string;
  items: FaqEntry[];
};

/** H2 section title + H3 per question (no skipped heading levels). */
export function FaqSection({ title, id = "faq-heading", items }: FaqSectionProps) {
  return (
    <section className="faq-block" aria-labelledby={id}>
      <h2 id={id} className="section-title">
        <span className="section-title__mark" aria-hidden="true" />
        {title}
      </h2>
      <div className="faq-stack">
        {items.map((faq, i) => (
          <div className="faq-item" key={faq.q}>
            <span className="faq-item__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
