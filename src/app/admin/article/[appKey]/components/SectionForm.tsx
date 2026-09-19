"use client";

import { useState } from "react";
import type { ArticleSection, ArticleSectionFormValues } from "@/types";
import ImageUploader from "./ImageUploader";

interface SectionFormProps {
  initial?: ArticleSection;
  onSubmit: (values: ArticleSectionFormValues) => Promise<void>;
  onCancel: () => void;
}

const emptyValues: ArticleSectionFormValues = {
  emoji: "✨",
  title: "",
  description: "",
  image_url: "",
};

export default function SectionForm({
  initial,
  onSubmit,
  onCancel,
}: SectionFormProps) {
  const [values, setValues] = useState<ArticleSectionFormValues>(
    initial
      ? {
          emoji: initial.emoji,
          title: initial.title,
          description: initial.description,
          image_url: initial.image_url ?? "",
        }
      : emptyValues,
  );
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setFormError(null);
    try {
      await onSubmit(values);
    } catch (err) {
      setFormError(err instanceof Error ? err.message : "Terjadi kesalahan.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.row}>
        <div style={{ ...styles.field, flex: "0 0 80px" }}>
          <label style={styles.label}>Emoji</label>
          <input
            style={styles.input}
            value={values.emoji}
            onChange={(e) => setValues({ ...values, emoji: e.target.value })}
            required
          />
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Judul Fitur</label>
          <input
            style={styles.input}
            value={values.title}
            onChange={(e) => setValues({ ...values, title: e.target.value })}
            required
          />
        </div>
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Deskripsi</label>
        <textarea
          style={{ ...styles.input, minHeight: 90 }}
          value={values.description}
          onChange={(e) =>
            setValues({ ...values, description: e.target.value })
          }
          required
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Gambar</label>
        <ImageUploader
          value={values.image_url}
          onChange={(url) => setValues({ ...values, image_url: url })}
        />
      </div>

      {formError && <p style={styles.error}>{formError}</p>}

      <div style={styles.actions}>
        <button type="button" onClick={onCancel} style={styles.cancelBtn}>
          Batal
        </button>
        <button type="submit" disabled={submitting} style={styles.submitBtn}>
          {submitting ? "Menyimpan..." : "Simpan Fitur"}
        </button>
      </div>
    </form>
  );
}

const styles: Record<string, React.CSSProperties> = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
    background: "#111827",
    border: "1px solid #1f2937",
    borderRadius: 12,
    padding: 20,
  },
  row: { display: "flex", gap: 14 },
  field: { flex: 1, display: "flex", flexDirection: "column", gap: 4 },
  label: { color: "#9ca3af", fontSize: "0.8rem" },
  input: {
    background: "#0a0a0a",
    border: "1px solid #1f2937",
    borderRadius: 8,
    padding: "8px 10px",
    color: "#e5e5e5",
    fontSize: "0.9rem",
  },
  error: { color: "#f87171", fontSize: "0.85rem" },
  actions: { display: "flex", justifyContent: "flex-end", gap: 10 },
  cancelBtn: {
    background: "transparent",
    border: "1px solid #1f2937",
    color: "#9ca3af",
    padding: "8px 16px",
    borderRadius: 8,
    cursor: "pointer",
  },
  submitBtn: {
    background: "#10b981",
    color: "#0a0a0a",
    fontWeight: 600,
    border: "none",
    padding: "8px 16px",
    borderRadius: 8,
    cursor: "pointer",
  },
};
