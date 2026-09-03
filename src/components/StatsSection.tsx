"use client";
import { stats } from "@/data/apps";
export default function StatsSection() {
  return (
    <div className="statsbar">
      <div className="statsbar-inner">
        {stats.map((s) => (
          <div key={s.label} className="stat-cell">
            <div className="stat-val">{s.value}</div>
            <div className="stat-lbl">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
