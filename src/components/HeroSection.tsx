"use client";
export default function HeroSection() {
  const s = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section className="hero" id="hero">
      <div className="hero-aura" />
      <div className="hero-inner">
        {/* LEFT */}
        <div>
          <div className="mono-chip">$ whoami → full-stack developer</div>
          <h1 className="hero-name">Dede Muhidin</h1>
          <p className="hero-role">Full-Stack & Mobile Developer</p>
          <p className="hero-bio">
            Membangun sistem digital untuk <strong>PT Jasa Prima Logistik Bulog</strong> —
            dari real-time fleet tracking, distribusi Bantuan Pangan, aplikasi pelabuhan,
            hingga automasi tagihan via WhatsApp. Spesialis{" "}
            <strong>React · Flutter · Supabase · n8n</strong>.
          </p>
          <div className="hero-btns">
            <button className="btn-p" onClick={() => s("apps")}>
              Lihat Proyek ↓
            </button>
            <button className="btn-g" onClick={() => s("kontak")}>
              Hubungi Saya
            </button>
          </div>
        </div>

        {/* RIGHT — terminal */}
        <div className="terminal">
          <div className="terminal-bar">
            <span className="tb-dot r" />
            <span className="tb-dot y" />
            <span className="tb-dot g" />
            <span className="terminal-title">~/portfolio/dede.json</span>
          </div>
          <div className="terminal-body">
            <span className="t-comment">{"// Dede Muhidin — Developer Profile"}</span>{"\n"}
            {"{"}{"\n"}
            {"  "}<span className="t-key">"name"</span>:{" "}
            <span className="t-str">"Dede Muhidin"</span>,{"\n"}
            {"  "}<span className="t-key">"role"</span>:{" "}
            <span className="t-str">"Full-Stack Developer"</span>,{"\n"}
            {"  "}<span className="t-key">"location"</span>:{" "}
            <span className="t-str">"Padang, West Sumatra 🇮🇩"</span>,{"\n"}
            {"  "}<span className="t-key">"employer"</span>:{" "}
            <span className="t-str">"PT Jasa Prima Logistik Bulog"</span>,{"\n"}
            {"  "}<span className="t-key">"apps_built"</span>:{" "}
            <span className="t-num">5</span>,{"\n"}
            {"  "}<span className="t-key">"stack"</span>: [{"\n"}
            {"    "}<span className="t-str">"React"</span>,{" "}
            <span className="t-str">"Flutter"</span>,{"\n"}
            {"    "}<span className="t-str">"Supabase"</span>,{" "}
            <span className="t-str">"n8n"</span>{"\n"}
            {"  "}],{"\n"}
            {"  "}<span className="t-key">"available"</span>:{" "}
            <span className="t-val">true</span>,{"\n"}
            {"  "}<span className="t-key">"contact"</span>:{" "}
            <span className="t-str">"dedemuhi.info"</span>{"\n"}
            {"}"}
            {"\n\n"}
            <span className="t-comment">$</span>{" "}
            <span className="t-cursor" />
          </div>
        </div>
      </div>
    </section>
  );
}
