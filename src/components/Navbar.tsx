"use client";
export default function Navbar() {
  const s = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="nav-logo">
          <div className="avatar">D</div>
          <span>Dede Muhidin</span>
        </div>
        <div className="nav-status">
          <span className="dot" />
          open to freelance
        </div>
        <ul className="nav-links">
          <li><a href="#apps" onClick={(e)=>{e.preventDefault();s("apps")}}>Proyek</a></li>
          <li><a href="#skills" onClick={(e)=>{e.preventDefault();s("skills")}}>Skill</a></li>
          <li><a href="#kontak" onClick={(e)=>{e.preventDefault();s("kontak")}}>Kontak</a></li>
          <li>
            <a href="https://tracking.jasaprimalogistics.id" target="_blank" rel="noopener noreferrer" className="nav-cta">
              Live Demo →
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
