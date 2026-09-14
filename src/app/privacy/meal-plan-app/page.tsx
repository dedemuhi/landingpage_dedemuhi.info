import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Kebijakan Privasi — Meal Plan App | Dede Muhidin",
  description:
    "Kebijakan Privasi Meal Plan App: data yang dikumpulkan, cara penggunaan, penyimpanan, dan hak pengguna atas datanya.",
};

const LAST_UPDATED = "14 September 2026";

export default function PrivacyPolicyMealPlanApp() {
  return (
    <main className={styles.page}>
      <div className={styles.aura} />
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          ← Kembali ke Beranda
        </Link>

        <header className={styles.hero}>
          <span className={styles.emoji}>🍽️</span>
          <span className={styles.tag}>// legal · privacy policy</span>
          <h1 className={styles.title}>Kebijakan Privasi</h1>
          <p className={styles.subtitle}>Meal Plan App</p>
          <span className={styles.updated}>
            Terakhir diperbarui: {LAST_UPDATED}
          </span>
        </header>

        <div className={styles.card}>
          <p className={styles.lead}>
            Meal Plan App (&quot;Aplikasi&quot;) dikembangkan oleh dedemuhi.dev
            (&quot;kami&quot;, &quot;saya&quot;) sebagai aplikasi pribadi untuk
            membantu pengguna merencanakan makan dan mencatat aktivitas
            harian. Kebijakan Privasi ini menjelaskan data apa saja yang kami
            kumpulkan, bagaimana data tersebut digunakan, dan hak pengguna
            atas data mereka.
          </p>

          <section className={styles.section}>
            <h2>
              <span className={styles.num}>01</span>
              Data yang Kami Kumpulkan
            </h2>
            <p>
              Saat menggunakan Aplikasi, kami dapat mengumpulkan informasi
              berikut:
            </p>
            <ul>
              <li>
                <strong>Data akun</strong> — alamat email dan informasi profil
                dasar saat mendaftar/login.
              </li>
              <li>
                <strong>Data target &amp; berat badan</strong> — target
                kalori/nutrisi dan catatan berat badan yang Anda masukkan
                sendiri.
              </li>
              <li>
                <strong>Data catatan makan</strong> — jenis makanan, porsi,
                dan waktu makan yang Anda catat.
              </li>
              <li>
                <strong>Data catatan olahraga/aktivitas</strong> — aktivitas
                fisik yang Anda catat di Aplikasi.
              </li>
            </ul>
            <p>
              Semua data di atas dimasukkan secara sukarela oleh pengguna
              melalui fitur pencatatan di dalam Aplikasi. Kami tidak
              mengumpulkan data ini melalui sensor perangkat atau pelacakan
              lokasi.
            </p>
          </section>

          <section className={styles.section}>
            <h2>
              <span className={styles.num}>02</span>
              Bagaimana Data Digunakan
            </h2>
            <p>Data yang dikumpulkan digunakan semata-mata untuk:</p>
            <ul>
              <li>
                Menyediakan fitur inti Aplikasi (perencanaan makan, pelacakan
                progres, riwayat aktivitas).
              </li>
              <li>Menyimpan preferensi dan pengaturan akun Anda antar sesi.</li>
            </ul>
            <p>
              Kami{" "}
              <strong>
                tidak menjual, menyewakan, atau membagikan data pribadi Anda
              </strong>{" "}
              kepada pihak ketiga untuk tujuan pemasaran.
            </p>
          </section>

          <section className={styles.section}>
            <h2>
              <span className={styles.num}>03</span>
              Penyimpanan Data
            </h2>
            <p>
              Data disimpan secara aman menggunakan layanan backend Supabase
              (PostgreSQL) dengan autentikasi dan kontrol akses standar
              industri. Data hanya dapat diakses oleh akun pengguna yang
              bersangkutan.
            </p>
          </section>

          <section className={styles.section}>
            <h2>
              <span className={styles.num}>04</span>
              Berbagi Data dengan Pihak Ketiga
            </h2>
            <p>
              Kami menggunakan penyedia layanan pihak ketiga berikut untuk
              menjalankan Aplikasi:
            </p>
            <ul>
              <li>
                <strong>Supabase</strong> — penyimpanan basis data dan
                autentikasi pengguna.
              </li>
            </ul>
            <p>
              Penyedia layanan ini memproses data atas nama kami dan tunduk
              pada kebijakan privasi mereka masing-masing.
            </p>
          </section>

          <section className={styles.section}>
            <h2>
              <span className={styles.num}>05</span>
              Hak Pengguna
            </h2>
            <p>Anda berhak untuk:</p>
            <ul>
              <li>Mengakses dan memperbarui data profil Anda melalui Aplikasi.</li>
              <li>
                Meminta penghapusan akun dan seluruh data terkait dengan
                menghubungi kami melalui email di bawah.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>
              <span className={styles.num}>06</span>
              Keamanan Data
            </h2>
            <p>
              Kami menerapkan langkah-langkah teknis yang wajar untuk
              melindungi data Anda dari akses tidak sah, kehilangan, atau
              penyalahgunaan. Namun, tidak ada metode transmisi atau
              penyimpanan data elektronik yang 100% aman.
            </p>
          </section>

          <section className={styles.section}>
            <h2>
              <span className={styles.num}>07</span>
              Privasi Anak
            </h2>
            <p>
              Aplikasi ini tidak ditujukan untuk anak-anak di bawah usia 13
              tahun, dan kami tidak secara sengaja mengumpulkan data dari
              anak-anak di bawah usia tersebut.
            </p>
          </section>

          <section className={styles.section}>
            <h2>
              <span className={styles.num}>08</span>
              Perubahan Kebijakan Privasi
            </h2>
            <p>
              Kebijakan Privasi ini dapat diperbarui dari waktu ke waktu.
              Perubahan akan dipublikasikan di halaman ini dengan tanggal
              pembaruan terbaru.
            </p>
          </section>

          <section className={styles.section}>
            <h2>
              <span className={styles.num}>09</span>
              Kontak
            </h2>
            <p>
              Jika Anda memiliki pertanyaan mengenai Kebijakan Privasi ini,
              silakan hubungi kami:
            </p>
            <div className={styles.contactBox}>
              <span>Pertanyaan seputar privasi &amp; data Anda</span>
              <a
                href="mailto:dedemuhi@gmail.com"
                className={styles.contactLink}
              >
                dedemuhi@gmail.com
              </a>
            </div>
          </section>
        </div>

        <p className={styles.pageFooter}>Dede Muhidin · dedemuhi.info</p>
      </div>
    </main>
  );
}
