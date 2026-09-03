"use client";
export default function CtaSection() {
  return (
    <section className="cta-wrap" id="kontak">
      <div className="cta-glow" />
      <div className="cta-box">
        <span className="s-tag" style={{ justifyContent: "center" }}>// contact</span>
        <h2 className="cta-title">Ada Proyek yang Ingin Dibangun?</h2>
        <p className="cta-sub">
          Saya terbuka untuk proyek freelance — sistem web, aplikasi mobile, automasi workflow,
          atau konsultasi teknis. Berbasis di Padang, bisa remote.
        </p>
        <a
          href="mailto:hi@dedemuhi@gmail.com"
          className="btn-p"
          style={{ display: "inline-flex", margin: "0 auto" }}
        >
          <span>✉</span> hi@dedemuhi.info
        </a>
        <div className="cta-links">
          <a href="https://wa.me/62811123237" className="cta-link" target="_blank" rel="noopener noreferrer">
            <span>📱</span> WhatsApp
          </a>
          <a href="https://github.com/dedemuhi" className="cta-link" target="_blank" rel="noopener noreferrer">
            <span>🐙</span> GitHub
          </a>
          <a href="https://linkedin.com/in/dedemuhi" className="cta-link" target="_blank" rel="noopener noreferrer">
            <span>💼</span> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
