"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useArticleData } from "./hooks/useArticleData";
import SectionForm from "./components/SectionForm";
import SectionList from "./components/SectionList";
import ImageUploader from "./components/ImageUploader";
import type { ArticleSection, ArticleMetaFormValues } from "@/types";

export default function AdminArticlePage() {
  const params = useParams();
  const appKey = params.appKey as string;

  const {
    app,
    sections,
    loading,
    error,
    updateMeta,
    createSection,
    updateSection,
    deleteSection,
    swapOrder,
  } = useArticleData(appKey);

  const [editingSection, setEditingSection] = useState<ArticleSection | null>(
    null,
  );
  const [showForm, setShowForm] = useState(false);
  const [metaValues, setMetaValues] = useState<ArticleMetaFormValues | null>(
    null,
  );
  const [savingMeta, setSavingMeta] = useState(false);
  const [metaError, setMetaError] = useState<string | null>(null);

  const meta: ArticleMetaFormValues = metaValues ?? {
    intro_text: app?.intro_text ?? "",
    apk_url: app?.apk_url ?? "",
    apk_version: app?.apk_version ?? "",
    apk_size: app?.apk_size ?? "",
    cta_title: app?.cta_title ?? "",
    cta_description: app?.cta_description ?? "",
    disclaimer_text: app?.disclaimer_text ?? "",
  };
  const handleSaveMeta = async () => {
    setSavingMeta(true);
    setMetaError(null);
    try {
      await updateMeta(meta);
      setMetaValues(null);
    } catch (err) {
      setMetaError(err instanceof Error ? err.message : "Terjadi kesalahan.");
    } finally {
      setSavingMeta(false);
    }
  };

  const handleDeleteSection = async (section: ArticleSection) => {
    if (!confirm(`Hapus fitur "${section.title}"?`)) return;
    await deleteSection(section.id);
  };

  if (loading) return <p style={styles.status}>Memuat data...</p>;
  if (error) return <p style={styles.statusError}>Error: {error}</p>;
  if (!app) return <p style={styles.statusError}>Aplikasi tidak ditemukan.</p>;

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <Link href="/admin" style={styles.backLink}>
          ← Kembali ke Daftar Proyek
        </Link>

        <h1 style={styles.title}>Edit Artikel: {app.name}</h1>

        <section style={styles.metaSection}>
          <h2 style={styles.sectionTitle}>Info Umum Artikel</h2>

          <label style={styles.label}>Paragraf Intro</label>
          <textarea
            style={{ ...styles.input, minHeight: 120 }}
            value={meta.intro_text}
            onChange={(e) =>
              setMetaValues({ ...meta, intro_text: e.target.value })
            }
          />

          <div style={styles.row}>
            <div style={styles.field}>
              <label style={styles.label}>URL APK</label>
              <input
                style={styles.input}
                value={meta.apk_url}
                onChange={(e) =>
                  setMetaValues({ ...meta, apk_url: e.target.value })
                }
              />
            </div>
            <div style={styles.field}>
              <label style={styles.label}>Versi</label>
              <input
                style={styles.input}
                value={meta.apk_version}
                onChange={(e) =>
                  setMetaValues({ ...meta, apk_version: e.target.value })
                }
              />
            </div>
            <div style={styles.field}>
              <label style={styles.label}>Ukuran File</label>
              <input
                style={styles.input}
                value={meta.apk_size}
                onChange={(e) =>
                  setMetaValues({ ...meta, apk_size: e.target.value })
                }
              />
            </div>
          </div>

          <label style={styles.label}>Judul Bagian CTA</label>
          <input
            style={styles.input}
            value={meta.cta_title}
            onChange={(e) =>
              setMetaValues({ ...meta, cta_title: e.target.value })
            }
          />

          <label style={styles.label}>Deskripsi Bagian CTA</label>
          <textarea
            style={{ ...styles.input, minHeight: 80 }}
            value={meta.cta_description}
            onChange={(e) =>
              setMetaValues({ ...meta, cta_description: e.target.value })
            }
          />

          <label style={styles.label}>Teks Disclaimer</label>
          <input
            style={styles.input}
            value={meta.disclaimer_text}
            onChange={(e) =>
              setMetaValues({ ...meta, disclaimer_text: e.target.value })
            }
          />

          {metaError && <p style={styles.error}>{metaError}</p>}

          <button
            style={styles.saveBtn}
            onClick={handleSaveMeta}
            disabled={savingMeta}
          >
            {savingMeta ? "Menyimpan..." : "Simpan Info Umum"}
          </button>
        </section>

        <section>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Fitur / Bagian Artikel</h2>
            <button
              style={styles.addBtn}
              onClick={() => {
                setEditingSection(null);
                setShowForm(true);
              }}
            >
              + Tambah Fitur
            </button>
          </div>

          {showForm && (
            <div style={{ marginBottom: 20 }}>
              <SectionForm
                initial={editingSection ?? undefined}
                onCancel={() => {
                  setShowForm(false);
                  setEditingSection(null);
                }}
                onSubmit={async (values) => {
                  if (editingSection) {
                    await updateSection(editingSection.id, values);
                  } else {
                    await createSection(values);
                  }
                  setShowForm(false);
                  setEditingSection(null);
                }}
              />
            </div>
          )}

          <SectionList
            sections={sections}
            onEdit={(s) => {
              setEditingSection(s);
              setShowForm(true);
            }}
            onDelete={handleDeleteSection}
            onMoveUp={(a, b) => swapOrder(a, b)}
            onMoveDown={(a, b) => swapOrder(a, b)}
          />
        </section>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: { minHeight: "100vh", background: "#0a0a0a", padding: "40px 0" },
  container: { maxWidth: 780, margin: "0 auto", padding: "0 24px" },
  backLink: {
    color: "#9ca3af",
    textDecoration: "none",
    fontSize: "0.85rem",
    display: "inline-block",
    marginBottom: 20,
  },
  title: { color: "#e5e5e5", fontSize: "1.4rem", marginBottom: 28 },
  metaSection: {
    background: "#111827",
    border: "1px solid #1f2937",
    borderRadius: 12,
    padding: 20,
    marginBottom: 36,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: { color: "#e5e5e5", fontSize: "1.1rem", margin: 0 },
  row: { display: "flex", gap: 12 },
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
  saveBtn: {
    alignSelf: "flex-start",
    background: "#10b981",
    color: "#0a0a0a",
    fontWeight: 600,
    border: "none",
    padding: "8px 18px",
    borderRadius: 8,
    cursor: "pointer",
    marginTop: 8,
  },
  addBtn: {
    background: "#10b981",
    color: "#0a0a0a",
    fontWeight: 600,
    border: "none",
    padding: "8px 16px",
    borderRadius: 8,
    cursor: "pointer",
  },
  status: { color: "#9ca3af", padding: 40, textAlign: "center" },
  statusError: { color: "#f87171", padding: 40, textAlign: "center" },
  error: { color: "#f87171", fontSize: "0.85rem", margin: 0 },
};
