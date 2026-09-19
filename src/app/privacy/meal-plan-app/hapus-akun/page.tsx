import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Hapus Akun — Meal Plan App | Dede Muhidin",
  description:
    "Cara meminta penghapusan akun Meal Plan App beserta seluruh data terkait, data apa saja yang dihapus, dan periode retensinya.",
};

const LAST_UPDATED = "14 September 2026";
const CONTACT_EMAIL = "dedemuhi@gmail.com";

export default function HapusAkunMealPlanApp() {
  return (
    <main className={styles.page}>
      <div className={styles.aura} />
      <div className={styles.container}>
        <Link href="/privacy/meal-plan-app" className={styles.backLink}>
          ← Kembali ke Kebijakan Privasi
        </Link>

        <header className={styles.hero}>
          <span className={styles.emoji}>🗑️</span>
          <span className={styles.tag}>// legal · penghapusan akun</span>
          <h1 className={styles.title}>Hapus Akun</h1>
          <p className={styles.subtitle}>Meal Plan App</p>
          <span className={styles.updated}>
            Terakhir diperbarui: {LAST_UPDATED}
          </span>
        </header>

        <div className={styles.card}>
          <p className={styles.lead}>
            Meal Plan App, dikembangkan oleh dedemuhi.dev, menyediakan cara bagi
            pengguna untuk meminta penghapusan akun beserta seluruh data
            terkait. Halaman ini menjelaskan langkah, data yang dihapus, dan
            periode retensinya.
          </p>

          <section className={styles.section}>
            <h2>
              <span className={styles.num}>01</span>
              Cara Meminta Penghapusan Akun
            </h2>
            <div className={styles.steps}>
              <div className={styles.step}>
                <span className={styles.stepNum}>1</span>
                <div className={styles.stepBody}>
                  <p>
                    Kirim email ke{" "}
                    <a
                      href={`mailto:${CONTACT_EMAIL}?subject=Permintaan Hapus Akun - Meal Plan App`}
                    >
                      {CONTACT_EMAIL}
                    </a>{" "}
                    dengan subjek{" "}
                    <strong>&quot;Permintaan Hapus Akun - Meal Plan App&quot;</strong>.
                  </p>
                </div>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNum}>2</span>
                <div className={styles.stepBody}>
                  <p>
                    Sertakan alamat email yang terdaftar di akun Meal Plan App
                    Anda pada isi email, agar kami dapat memverifikasi dan
                    memproses permintaan Anda.
                  </p>
                </div>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNum}>3</span>
                <div className={styles.stepBody}>
                  <p>
                    Kami akan memproses permintaan Anda dan mengirimkan
                    konfirmasi melalui email dalam waktu maksimal{" "}
                    <strong>7 hari kerja</strong> setelah permintaan diterima.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>
              <span className={styles.num}>02</span>
              Data yang Dihapus
            </h2>
            <p>
              Setelah permintaan diproses, seluruh data berikut akan dihapus
              secara permanen:
            </p>
            <ul>
              <li>Data akun (email, profil).</li>
              <li>Target kalori/nutrisi dan riwayat berat badan.</li>
              <li>Seluruh catatan makan (food log) yang pernah dimasukkan.</li>
              <li>
                Seluruh catatan aktivitas/olahraga yang pernah dimasukkan.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>
              <span className={styles.num}>03</span>
              Data yang Mungkin Tetap Disimpan Sementara
            </h2>
            <div className={styles.warningBox}>
              <span className={styles.warningIcon}>⚠️</span>
              <p>
                Untuk kepatuhan teknis dan keamanan (misalnya mencegah
                penyalahgunaan sistem), log teknis minimal seperti catatan
                akses server dapat disimpan hingga{" "}
                <strong>30 hari</strong> setelah penghapusan akun sebelum
                dihapus secara otomatis. Data ini tidak dapat digunakan untuk
                mengidentifikasi aktivitas pribadi Anda di dalam aplikasi.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2>
              <span className={styles.num}>04</span>
              Kontak
            </h2>
            <p>
              Pertanyaan lebih lanjut mengenai penghapusan akun dapat dikirim
              ke:
            </p>
            <div className={styles.contactBox}>
              <span>Pertanyaan seputar penghapusan akun</span>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className={styles.contactLink}
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </section>
        </div>

        <p className={styles.pageFooter}>Dede Muhidin · dedemuhi.info</p>
      </div>
    </main>
  );
}
