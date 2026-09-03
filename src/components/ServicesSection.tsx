"use client";
import { skills } from "@/data/apps";
export default function SkillsSection() {
  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <span className="s-tag">// tech_stack</span>
        <h2 className="s-title">Tools & Teknologi</h2>
        <p className="s-sub">
          Stack yang saya gunakan sehari-hari di produksi — bukan sekadar familiar, tapi sudah teruji di sistem nyata.
        </p>
      </div>
      <div className="skills-grid">
        {skills.map((sk) => (
          <div key={sk.title} className="skill-card">
            <span className="skill-icon">{sk.icon}</span>
            <div className="skill-title">{sk.title}</div>
            <div className="skill-tags">
              {sk.tags.map((t) => <span key={t} className="skill-tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
