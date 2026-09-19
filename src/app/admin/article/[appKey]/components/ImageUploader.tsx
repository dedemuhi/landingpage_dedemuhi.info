"use client";

import { useRef, useState } from "react";

interface ImageUploaderProps {
  value: string;
  onChange: (url: string) => void;
}

export default function ImageUploader({ value, onChange }: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Upload gagal");
      }

      onChange(data.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload gagal");
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  return (
    <div style={styles.wrapper}>
      {value && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={value} alt="Preview" style={styles.preview} />
      )}
      <div style={styles.controls}>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          onChange={handleFileChange}
          disabled={uploading}
          style={styles.input}
        />
        {uploading && <span style={styles.status}>Mengupload ke R2...</span>}
        {error && <span style={styles.error}>{error}</span>}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: { display: "flex", flexDirection: "column", gap: 8 },
  preview: {
    width: 160,
    borderRadius: 8,
    border: "1px solid #1f2937",
    display: "block",
  },
  controls: { display: "flex", flexDirection: "column", gap: 4 },
  input: { color: "#9ca3af", fontSize: "0.85rem" },
  status: { color: "#93c5fd", fontSize: "0.8rem" },
  error: { color: "#f87171", fontSize: "0.8rem" },
};
