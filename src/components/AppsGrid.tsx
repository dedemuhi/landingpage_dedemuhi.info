"use client";

import type { LandingApp } from "@/types";

const badgeClass: Record<string, string> = {
  Live: "badge-live",
  Core: "badge-core",
  Mobile: "badge-mobile",
  Auto: "badge-auto",
};

const DEMO_CREDENTIALS: Record<string, { label: string; hint: string }> = {
  operasional: {
    label: "operasional-live-demo.dedemuhi.info",
    hint: "Demo: admin@demo.info / staff@demo.info / superadmin@demo.info — Password: Demo@2025!",
  },
};

export default function AppsGrid({ apps }: { apps: LandingApp[] }) {
  const featured = apps.find((a) => a.is_featured) ?? apps[0];
  const rest = apps.filter((a) => a.id !== featured?.id);

  if (!featured) return null;

  const featuredDemo = DEMO_CREDENTIALS[featured.app_key];

  return (
    <div className="apps-grid">
      <a
        href={featured.url}
        target={featured.url.startsWith("/") ? undefined : "_blank"}
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
                  <span className={`badge ${badgeClass[featured.badge] ?? ""}`}>
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
            <span className="app-link">
              {featured.cta_label ?? "Buka Live Demo →"}
            </span>
          </div>
        </div>
      </a>

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
                <span className={`badge ${badgeClass[app.badge] ?? ""}`}>
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
              <span className="app-link">{app.cta_label ?? "Buka →"}</span>
            ) : (
              <span className="app-link-soon">Private / Internal</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}