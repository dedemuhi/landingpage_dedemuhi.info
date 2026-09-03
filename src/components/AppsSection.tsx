"use client";
import { apps } from "@/data/apps";

const badgeClass: Record<string, string> = {
  Live: "badge-live", Core: "badge-core", Mobile: "badge-mobile", Auto: "badge-auto",
};

export default function AppsSection() {
  const [fms, ...rest] = apps;
  return (
    <section className="section" id="apps">
      <div className="container">
        <span className="s-tag">// projects</span>
        <h2 className="s-title">Aplikasi yang Saya Bangun</h2>
        <p className="s-sub">
          Sistem nyata yang berjalan di produksi — mengelola logistik, distribusi pangan,
          dan operasional lapangan setiap hari.
        </p>
      </div>

      <div className="apps-grid">
        {/* FMS — featured, span 2 */}
        <a
          href={fms.url}
          target="_blank"
          rel="noopener noreferrer"
          className="app-card featured"
          style={{ textDecoration: "none" }}
        >
          <div className="app-screenshot">{fms.emoji}</div>
          <div className="app-body">
            <div>
              <div className="app-card-head" style={{ marginBottom: 12 }}>
                <div />
                <div className="badges">
                  {fms.badge && <span className={`badge ${badgeClass[fms.badge]}`}>{fms.badge}</span>}
                  <span className={`badge badge-live`} style={{ background: "rgba(59,130,246,0.1)", color: "#93C5FD", borderColor: "rgba(59,130,246,0.25)" }}>
                    tracking.jasaprimalogistics.id
                  </span>
                </div>
              </div>
              <div className="app-name">{fms.name}</div>
              <div className="app-tagline">{fms.tagline}</div>
              <div className="app-desc">{fms.description}</div>
            </div>
            <div className="app-tech">
              {fms.tech.map((t) => <span key={t} className="tech-tag">{t}</span>)}
            </div>
            <div className="app-footer">
              <span className="app-link">Buka Aplikasi →</span>
            </div>
          </div>
        </a>

        {/* Rest */}
        {rest.map((app) => (
          <div
            key={app.id}
            className="app-card"
            style={{ cursor: app.url !== "#" ? "pointer" : "default" }}
            onClick={() => app.url !== "#" && window.open(app.url, "_blank")}
          >
            <div className="app-card-head">
              <div className="app-emoji">{app.emoji}</div>
              {app.badge && (
                <div className="badges">
                  <span className={`badge ${badgeClass[app.badge]}`}>{app.badge}</span>
                </div>
              )}
            </div>
            <div>
              <div className="app-name">{app.name}</div>
              <div className="app-tagline">{app.tagline}</div>
              <div className="app-desc">{app.description}</div>
            </div>
            <div className="app-tech">
              {app.tech.map((t) => <span key={t} className="tech-tag">{t}</span>)}
            </div>
            <div className="app-footer">
              {app.url !== "#"
                ? <span className="app-link">Buka →</span>
                : <span className="app-link-soon">Private / Internal</span>
              }
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
