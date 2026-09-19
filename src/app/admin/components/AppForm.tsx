"use client";

import { useState } from "react";
import type { LandingApp, LandingAppFormValues } from "@/types";

interface AppFormProps {
  initial?: LandingApp;
  onSubmit: (values: LandingAppFormValues) => Promise<void>;
  onCancel: () => void;
}

const emptyForm: LandingAppFormValues = {
  app_key: "",
  name: "",
  tagline: "",
  description: "",
  url: "",
  tech: [],
  emoji: "🚀",
  badge: "",
  category: "web",
  cta_label: "",
  is_featured: false,
  sort_order: 0,
};

export default function AppForm({ initial, onSubmit, onCancel }: AppFormProps) {
  const [values, setValues] = useState<LandingAppFormValues>(
    initial
      ? {
          app_key: initial.app_key,
          name: initial.name,
          tagline: initial.tagline,
          description: initial.description,
          url: initial.url,
          tech: initial.tech,
          emoji: initial.emoji,
          badge: initial.badge ?? "",
          category: initial.category,
          cta_label: initial.cta_label ?? "",
          is_featured: initial.is_featured,
          sort_order: initial.sort_order,
        }
      : emptyForm,
  );
  const [techInput, setTechInput] = useState(values.tech.join(", "));
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setFormError(null);
    try {
      await onSubmit({
        ...values,
        tech: techInput
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
      });
    } catch (err) {
      setFormError(err instanceof Error ? err.message : "Terjadi kesalahan.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.row}>
        <div style={styles.field}>
          <label style={styles.label}>App Key (unik, contoh: meal-plan)</label>
          <input
            style={styles.input}
            value={values.app_key}
            onChange={(e) => setValues({ ...values, app_key: e.target.value })}
            required
            disabled={!!initial}
          />
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Emoji</label>
          <input
            style={styles.input}
            value={values.emoji}
            onChange={(e) => setValues({ ...values, emoji: e.target.value })}
            required
          />
        </div>
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Nama Aplikasi</label>
        <input
          style={styles.input}
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          required
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Tagline</label>
        <input
          style={styles.input}
          value={values.tagline}
          onChange={(e) => setValues({ ...values, tagline: e.target.value })}
          required
        />
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
        <label style={styles.label}>URL (link atau path internal)</label>
        <input
          style={styles.input}
          value={values.url}
          onChange={(e) => setValues({ ...values, url: e.target.value })}
          required
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Tech Stack (pisahkan dengan koma)</label>
        <input
          style={styles.input}
          value={techInput}
          onChange={(e) => setTechInput(e.target.value)}
          placeholder="React, Supabase, Flutter"
        />
      </div>

      <div style={styles.row}>
        <div style={styles.field}>
          <label style={styles.label}>Badge</label>
          <input
            style={styles.input}
            value={values.badge}
            onChange={(e) => setValues({ ...values, badge: e.target.value })}
            placeholder="Live / Core / Mobile / Auto"
          />
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Kategori</label>
          <select
            style={styles.input}
            value={values.category}
            onChange={(e) =>
              setValues({
                ...values,
                category: e.target.value as LandingAppFormValues["category"],
              })
            }
          >
            <option value="web">web</option>
            <option value="mobile">mobile</option>
            <option value="automation">automation</option>
          </select>
        </div>
      </div>

      <div style={styles.row}>
        <div style={styles.field}>
          <label style={styles.label}>CTA Label (opsional)</label>
          <input
            style={styles.input}
            value={values.cta_label}
            onChange={(e) =>
              setValues({ ...values, cta_label: e.target.value })
            }
            placeholder="Download APK →"
          />
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Urutan Tampil</label>
          <input
            type="number"
            style={styles.input}
            value={values.sort_order}
            onChange={(e) =>
              setValues({ ...values, sort_order: Number(e.target.value) })
            }
          />
        </div>
      </div>

      <label style={styles.checkboxLabel}>
        <input
          type="checkbox"
          checked={values.is_featured}
          onChange={(e) =>
            setValues({ ...values, is_featured: e.target.checked })
          }
        />
        Jadikan Featured (card besar pertama)
      </label>

      {formError && <p style={styles.error}>{formError}</p>}

      <div style={styles.actions}>
        <button type="button" onClick={onCancel} style={styles.cancelBtn}>
          Batal
        </button>
        <button type="submit" disabled={submitting} style={styles.submitBtn}>
          {submitting ? "Menyimpan..." : "Simpan"}
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
    padding: 24,
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
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    color: "#d1d5db",
    fontSize: "0.9rem",
  },
  error: { color: "#f87171", fontSize: "0.85rem" },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: 10,
    marginTop: 8,
  },
  cancelBtn: {
    background: "transparent",
    border: "1px solid #1f2937",
    color: "#9ca3af",
    padding: "10px 18px",
    borderRadius: 8,
    cursor: "pointer",
  },
  submitBtn: {
    background: "#10b981",
    color: "#0a0a0a",
    fontWeight: 600,
    border: "none",
    padding: "10px 18px",
    borderRadius: 8,
    cursor: "pointer",
  },
};
