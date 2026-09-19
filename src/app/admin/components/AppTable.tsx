"use client";

import Link from "next/link";
import type { LandingApp } from "@/types";

interface AppTableProps {
  apps: LandingApp[];
  onEdit: (app: LandingApp) => void;
  onDelete: (app: LandingApp) => void;
  onMoveUp: (app: LandingApp, prevApp: LandingApp) => void;
  onMoveDown: (app: LandingApp, nextApp: LandingApp) => void;
}

export default function AppTable({
  apps,
  onEdit,
  onDelete,
  onMoveUp,
  onMoveDown,
}: AppTableProps) {
  return (
    <div style={styles.wrapper}>
      {apps.map((app, index) => (
        <div key={app.id} style={styles.row}>
          <div style={styles.orderCol}>
            <button
              style={styles.orderBtn}
              disabled={index === 0}
              onClick={() => onMoveUp(app, apps[index - 1])}
            >
              ▲
            </button>
            <button
              style={styles.orderBtn}
              disabled={index === apps.length - 1}
              onClick={() => onMoveDown(app, apps[index + 1])}
            >
              ▼
            </button>
          </div>

          <div style={styles.emoji}>{app.emoji}</div>

          <div style={styles.info}>
            <div style={styles.nameRow}>
              <span style={styles.name}>{app.name}</span>
              {app.is_featured && <span style={styles.badge}>Featured</span>}
              {app.badge && <span style={styles.badgeGray}>{app.badge}</span>}
            </div>
            <span style={styles.tagline}>{app.tagline}</span>
          </div>

          <div style={styles.actions}>
            <button style={styles.editBtn} onClick={() => onEdit(app)}>
              Edit
            </button>
            <Link href={`/admin/article/${app.app_key}`} style={styles.articleBtn}>
              Edit Artikel
            </Link>
            <button style={styles.deleteBtn} onClick={() => onDelete(app)}>
              Hapus
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: { display: "flex", flexDirection: "column", gap: 10 },
  row: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    background: "#111827",
    border: "1px solid #1f2937",
    borderRadius: 10,
    padding: "14px 18px",
  },
  orderCol: { display: "flex", flexDirection: "column", gap: 2 },
  orderBtn: {
    background: "#0a0a0a",
    border: "1px solid #1f2937",
    color: "#9ca3af",
    borderRadius: 4,
    width: 24,
    height: 20,
    fontSize: "0.65rem",
    cursor: "pointer",
  },
  emoji: { fontSize: "1.6rem" },
  info: { flex: 1, display: "flex", flexDirection: "column", gap: 2 },
  nameRow: { display: "flex", alignItems: "center", gap: 8 },
  name: { color: "#e5e5e5", fontWeight: 600 },
  tagline: { color: "#6b7280", fontSize: "0.85rem" },
  badge: {
    background: "rgba(16,185,129,0.15)",
    color: "#10b981",
    fontSize: "0.7rem",
    padding: "2px 8px",
    borderRadius: 999,
  },
  badgeGray: {
    background: "#1f2937",
    color: "#9ca3af",
    fontSize: "0.7rem",
    padding: "2px 8px",
    borderRadius: 999,
  },
  actions: { display: "flex", gap: 8 },
  articleBtn: {
    background: "transparent",
    border: "1px solid #1f2937",
    color: "#a78bfa",
    padding: "6px 14px",
    borderRadius: 6,
    cursor: "pointer",
    fontSize: "0.85rem",
    textDecoration: "none",
  },
  editBtn: {
    background: "transparent",
    border: "1px solid #1f2937",
    color: "#93c5fd",
    padding: "6px 14px",
    borderRadius: 6,
    cursor: "pointer",
    fontSize: "0.85rem",
  },
  deleteBtn: {
    background: "transparent",
    border: "1px solid #1f2937",
    color: "#f87171",
    padding: "6px 14px",
    borderRadius: 6,
    cursor: "pointer",
    fontSize: "0.85rem",
  },
};
