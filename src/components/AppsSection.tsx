"use client";
import { apps } from "@/data/apps";

const badgeClass: Record<string, string> = {
  Live: "badge-live",
  Core: "badge-core",
  Mobile: "badge-mobile",
  Auto: "badge-auto",
};

const DEMO_CREDENTIALS = {
  operasional: {
    url: "https://operasional-live-demo.dedemuhi.info",
    label: "operasional-live-demo.dedemuhi.info",
    hint: "Demo: admin@demo.info / staff@demo.info / superadmin@demo.info — Password: Demo@2025!",
  },
};

export default function AppsSection() {
  const [featured, ...rest] = apps;
  const featuredDemo =
    DEMO_CREDENTIALS[featured.id as keyof typeof DEMO_CREDENTIALS];

  return (
    <section className="section" id="apps">
      <div className="container">
        <span className="s-tag">// projects</span>
        <h2 className="s-title">Aplikasi yang Saya Bangun</h2>
        <p className="s-sub">
          Sistem nyata yang berjalan di produksi — mengelola logistik,
          distribusi pangan, dan operasional lapangan setiap hari.
        </p>
      </div>

      <div className="apps-grid">
        {/* Featured — app pertama di array */}
        <a
          href={featured.url}
          target="_blank"
          rel="noopener noreferrer"
          className="app-card featured"
          style={{ textDecoration: "none" }}
        >
          <div className="app-screenshot">{featured.emoji}</div>
          <div className="app-body">
            <div>
              <div className="app-card-head" style={{ marginBottom: 12 }}>
                <div />
                <div className="badges">
                  {featured.badge && (
                    <span className={`badge ${badgeClass[featured.badge]}`}>
                      {featured.badge}
                    </span>
                  )}
                  {featuredDemo && (
                    <span
                      className="badge badge-live"
                      style={{
                        background: "rgba(59,130,246,0.1)",
                        color: "#93C5FD",
                        borderColor: "rgba(59,130,246,0.25)",
                      }}
                    >
                      {featuredDemo.label}
                    </span>
                  )}
                </div>
              </div>
              <div className="app-name">{featured.name}</div>
              <div className="app-tagline">{featured.tagline}</div>
              <div className="app-desc">{featured.description}</div>
              {featuredDemo && (
                <div
                  className="app-desc"
                  style={{
                    marginTop: 10,
                    padding: "8px 12px",
                    background: "rgba(59,130,246,0.07)",
                    borderRadius: 8,
                    borderLeft: "3px solid rgba(59,130,246,0.4)",
                    fontSize: "0.78rem",
                    color: "#93C5FD",
                    lineHeight: 1.6,
                  }}
                >
                  🔐 {featuredDemo.hint}
                </div>
              )}
            </div>
            <div className="app-tech">
              {featured.tech.map((t) => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>
            <div className="app-footer">
              <span className="app-link">Buka Live Demo →</span>
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
                  <span className={`badge ${badgeClass[app.badge]}`}>
                    {app.badge}
                  </span>
                </div>
              )}
            </div>
            <div>
              <div className="app-name">{app.name}</div>
              <div className="app-tagline">{app.tagline}</div>
              <div className="app-desc">{app.description}</div>
            </div>
            <div className="app-tech">
              {app.tech.map((t) => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>
            <div className="app-footer">
              {app.url !== "#" ? (
                <span className="app-link">Buka →</span>
              ) : (
                <span className="app-link-soon">Private / Internal</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
