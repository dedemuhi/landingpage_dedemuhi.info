"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (signInError) {
      setError("Email atau password salah.");
      return;
    }

    router.push("/admin");
    router.refresh();
  };

  return (
    <div style={styles.wrapper}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h1 style={styles.title}>Admin Login</h1>
        <p style={styles.subtitle}>dedemuhi.info content management</p>

        <label style={styles.label}>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
          autoComplete="email"
        />

        <label style={styles.label}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
          autoComplete="current-password"
        />

        {error && <p style={styles.error}>{error}</p>}

        <button type="submit" disabled={loading} style={styles.button}>
          {loading ? "Memproses..." : "Masuk"}
        </button>
      </form>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#0a0a0a",
  },
  form: {
    width: 340,
    padding: 32,
    background: "#111827",
    border: "1px solid #1f2937",
    borderRadius: 12,
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  title: { color: "#e5e5e5", fontSize: "1.4rem", margin: 0 },
  subtitle: { color: "#6b7280", fontSize: "0.85rem", marginBottom: 16 },
  label: { color: "#9ca3af", fontSize: "0.85rem", marginTop: 12 },
  input: {
    background: "#0a0a0a",
    border: "1px solid #1f2937",
    borderRadius: 8,
    padding: "10px 12px",
    color: "#e5e5e5",
    fontSize: "0.95rem",
  },
  error: { color: "#f87171", fontSize: "0.85rem", marginTop: 8 },
  button: {
    marginTop: 20,
    background: "#10b981",
    color: "#0a0a0a",
    fontWeight: 600,
    padding: "12px",
    borderRadius: 8,
    border: "none",
    cursor: "pointer",
    fontSize: "0.95rem",
  },
};
