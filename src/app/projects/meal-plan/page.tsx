import type { Metadata } from "next";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import type { LandingApp, ArticleSection } from "@/types";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title:
    "Meal Plan Tracker — Aplikasi Perencanaan Makan & Kalori | Dede Muhidin",
  description:
    "Meal Plan Tracker: aplikasi mobile untuk merencanakan menu makan harian, menghitung kebutuhan kalori otomatis berbasis BMR/TDEE, dan memantau progress berat badan.",
};

export const revalidate = 0;

export default async function MealPlanProjectPage() {
  const supabase = createClient();

  const { data: app } = await supabase
    .from("landing_apps")
    .select("*")
    .eq("app_key", "meal-plan")
    .single();

  const { data: sections } = await supabase
    .from("article_sections")
    .select("*")
    .eq("app_key", "meal-plan")
    .order("section_order", { ascending: true });

  if (!app) {
    return (
      <p style={{ padding: 40, color: "#e5e5e5" }}>Artikel tidak ditemukan.</p>
    );
  }

  const typedApp = app as LandingApp;
  const typedSections = (sections as ArticleSection[]) ?? [];
  const introParagraphs = (typedApp.intro_text ?? "")
    .split("\n\n")
    .filter(Boolean);

  return (
    <article className={styles.page}>
      <div className={styles.container}>
        <Link href="/#apps" className={styles.backLink}>
          ← Kembali ke Proyek
        </Link>

        <header className={styles.hero}>
          <span className={styles.emoji}>{typedApp.emoji}</span>
          <span className={styles.tag}>// personal project</span>
          <h1 className={styles.title}>{typedApp.name}</h1>
          <p className={styles.subtitle}>{typedApp.tagline}</p>
          {typedApp.apk_url && (
            <div className={styles.heroActions}>
              <a
                href={typedApp.apk_url}
                className={styles.downloadBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                ⬇ Download di Play Store
              </a>
              <span className={styles.meta}>
                {typedApp.apk_version} · {typedApp.apk_size} · Android
              </span>
            </div>
          )}
        </header>

        {introParagraphs.length > 0 && (
          <section className={styles.intro}>
            {introParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>
        )}

        {typedSections.length > 0 && (
          <section className={styles.features}>
            {typedSections.map((s, i) => (
              <div
                key={s.id}
                className={`${styles.featureRow} ${i % 2 === 1 ? styles.reverse : ""}`}
              >
                {s.image_url && (
                  <div className={styles.featureImage}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.image_url} alt={s.title} loading="lazy" />
                  </div>
                )}
                <div className={styles.featureText}>
                  <span className={styles.featureEmoji}>{s.emoji}</span>
                  <h2>{s.title}</h2>
                  <p>{s.description}</p>
                </div>
              </div>
            ))}
          </section>
        )}

        {typedApp.tech.length > 0 && (
          <section className={styles.techSection}>
            <h2>Dibangun Dengan</h2>
            <div className={styles.techTags}>
              {typedApp.tech.map((t) => (
                <span key={t} className={styles.techTag}>
                  {t}
                </span>
              ))}
            </div>
          </section>
        )}

        {typedApp.apk_url && (
          <section className={styles.ctaSection}>
            <h2>{typedApp.cta_title ?? "Coba Sekarang"}</h2>
            <p>{typedApp.cta_description}</p>
            <a
              href={typedApp.apk_url}
              className={styles.downloadBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              ⬇ Download di Play Store
            </a>
            {typedApp.disclaimer_text && (
              <p className={styles.disclaimer}>{typedApp.disclaimer_text}</p>
            )}
          </section>
        )}

        <div className={styles.legalLinks}>
          <Link href="/privacy/meal-plan-app">Kebijakan Privasi</Link>
          <span className={styles.legalDot}>·</span>
          <Link href="/privacy/meal-plan-app/hapus-akun">
            Permintaan Hapus Akun
          </Link>
        </div>
      </div>
    </article>
  );
}
