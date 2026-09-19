"use client";

import type { ArticleSection } from "@/types";

interface SectionListProps {
  sections: ArticleSection[];
  onEdit: (section: ArticleSection) => void;
  onDelete: (section: ArticleSection) => void;
  onMoveUp: (section: ArticleSection, prev: ArticleSection) => void;
  onMoveDown: (section: ArticleSection, next: ArticleSection) => void;
}

export default function SectionList({
  sections,
  onEdit,
  onDelete,
  onMoveUp,
  onMoveDown,
}: SectionListProps) {
  return (
    <div style={styles.wrapper}>
      {sections.map((section, index) => (
        <div key={section.id} style={styles.row}>
          <div style={styles.orderCol}>
            <button
              style={styles.orderBtn}
              disabled={index === 0}
              onClick={() => onMoveUp(section, sections[index - 1])}
            >
              ▲
            </button>
            <button
              style={styles.orderBtn}
              disabled={index === sections.length - 1}
              onClick={() => onMoveDown(section, sections[index + 1])}
            >
              ▼
            </button>
          </div>

          {section.image_url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={section.image_url} alt="" style={styles.thumb} />
          ) : (
            <div style={styles.thumbEmpty}>{section.emoji}</div>
          )}

          <div style={styles.info}>
            <span style={styles.title}>
              {section.emoji} {section.title}
            </span>
            <span style={styles.desc}>{section.description}</span>
          </div>

          <div style={styles.actions}>
            <button style={styles.editBtn} onClick={() => onEdit(section)}>
              Edit
            </button>
            <button style={styles.deleteBtn} onClick={() => onDelete(section)}>
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
    gap: 14,
    background: "#111827",
    border: "1px solid #1f2937",
    borderRadius: 10,
    padding: "12px 16px",
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
  thumb: {
    width: 64,
    height: 64,
    objectFit: "cover",
    borderRadius: 8,
    border: "1px solid #1f2937",
  },
  thumbEmpty: {
    width: 64,
    height: 64,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#0a0a0a",
    border: "1px solid #1f2937",
    borderRadius: 8,
    fontSize: "1.4rem",
  },
  info: { flex: 1, display: "flex", flexDirection: "column", gap: 2 },
  title: { color: "#e5e5e5", fontWeight: 600, fontSize: "0.9rem" },
  desc: {
    color: "#6b7280",
    fontSize: "0.8rem",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  actions: { display: "flex", gap: 8 },
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
