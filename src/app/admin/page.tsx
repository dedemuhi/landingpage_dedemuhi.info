"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { useLandingApps } from "./hooks/useLandingApps";
import AppForm from "./components/AppForm";
import AppTable from "./components/AppTable";
import type { LandingApp } from "@/types";

export default function AdminDashboardPage() {
  const router = useRouter();
  const { apps, loading, error, createApp, updateApp, deleteApp, reorderApp } =
    useLandingApps();
  const [editingApp, setEditingApp] = useState<LandingApp | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  const handleDelete = async (app: LandingApp) => {
    if (!confirm(`Hapus "${app.name}"? Tindakan ini tidak bisa dibatalkan.`)) {
      return;
    }
    await deleteApp(app.id);
  };

  const handleMoveUp = async (app: LandingApp, prevApp: LandingApp) => {
    await reorderApp(app.id, prevApp.sort_order);
    await reorderApp(prevApp.id, app.sort_order);
  };

  const handleMoveDown = async (app: LandingApp, nextApp: LandingApp) => {
    await reorderApp(app.id, nextApp.sort_order);
    await reorderApp(nextApp.id, app.sort_order);
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.header}>
          <div>
            <h1 style={styles.title}>Kelola Proyek</h1>
            <p style={styles.subtitle}>dedemuhi.info — Content Management</p>
          </div>
          <div style={styles.headerActions}>
            <button
              style={styles.addBtn}
              onClick={() => {
                setEditingApp(null);
                setShowForm(true);
              }}
            >
              + Tambah Proyek
            </button>
            <button style={styles.logoutBtn} onClick={handleLogout}>
              Keluar
            </button>
          </div>
        </div>

        {showForm && (
          <div style={{ marginBottom: 24 }}>
            <AppForm
              initial={editingApp ?? undefined}
              onCancel={() => {
                setShowForm(false);
                setEditingApp(null);
              }}
              onSubmit={async (values) => {
                if (editingApp) {
                  await updateApp(editingApp.id, values);
                } else {
                  await createApp(values);
                }
                setShowForm(false);
                setEditingApp(null);
              }}
            />
          </div>
        )}

        {loading && <p style={styles.status}>Memuat data...</p>}
        {error && <p style={styles.statusError}>Error: {error}</p>}

        {!loading && !error && (
          <AppTable
            apps={apps}
            onEdit={(app) => {
              setEditingApp(app);
              setShowForm(true);
            }}
            onDelete={handleDelete}
            onMoveUp={handleMoveUp}
            onMoveDown={handleMoveDown}
          />
        )}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: { minHeight: "100vh", background: "#0a0a0a", padding: "40px 0" },
  container: { maxWidth: 860, margin: "0 auto", padding: "0 24px" },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 28,
  },
  title: { color: "#e5e5e5", fontSize: "1.6rem", margin: 0 },
  subtitle: { color: "#6b7280", fontSize: "0.85rem", marginTop: 4 },
  headerActions: { display: "flex", gap: 10 },
  addBtn: {
    background: "#10b981",
    color: "#0a0a0a",
    fontWeight: 600,
    border: "none",
    padding: "10px 18px",
    borderRadius: 8,
    cursor: "pointer",
  },
  logoutBtn: {
    background: "transparent",
    border: "1px solid #1f2937",
    color: "#9ca3af",
    padding: "10px 18px",
    borderRadius: 8,
    cursor: "pointer",
  },
  status: { color: "#9ca3af" },
  statusError: { color: "#f87171" },
};
