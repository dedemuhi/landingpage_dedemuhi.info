export interface AppItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  tech: string[];
  emoji: string;
  badge?: string;
  category: "web" | "mobile" | "automation";
}

export interface SkillItem {
  icon: string;
  title: string;
  tags: string[];
}

export const apps: AppItem[] = [
  {
    id: "fms",
    name: "FMS — Fleet Management System",
    tagline: "Real-time truck tracking & trip management",
    description:
      "Dashboard live tracking armada truk distribusi dengan peta real-time, monitoring status perjalanan, surat jalan digital, dan manajemen uang jalan. Digunakan aktif oleh PT Jasa Prima Logistik Bulog.",
    url: "https://tracking.jasaprimalogistics.id/dashboard",
    tech: ["React", "Refine", "Supabase", "Leaflet", "Ant Design"],
    emoji: "🚛",
    badge: "Live",
    category: "web",
  },
  {
    id: "operasional",
    name: "Dasbor Operasional JPLB",
    tagline: "Pusat kendali distribusi Bantuan Pangan",
    description:
      "Sistem operasional utama pengelolaan Bantuan Pangan — import SPM/BAST dari Excel, dashboard progres per kabupaten, tanda terima biaya keamanan/kebersihan dengan OCR KTP otomatis via Claude Haiku.",
    url: "https://operasional.jasaprimalogistics.id",
    tech: ["React", "Refine", "Supabase", "Ant Design", "Claude OCR", "Cloudflare R2"],
    emoji: "📊",
    badge: "Core",
    category: "web",
  },
  {
    id: "bongkaran",
    name: "Bongkaran Kapal",
    tagline: "Aplikasi mobile penerimaan barang di pelabuhan",
    description:
      "Aplikasi Flutter untuk petugas gudang & pelabuhan — pencatatan bongkaran kapal dengan foto GPS/geotag berformat watermark, RBAC multi-role, dan penyimpanan di Cloudflare R2.",
    url: "#",
    tech: ["Flutter", "Supabase", "Riverpod", "GoRouter", "Cloudflare R2"],
    emoji: "⚓",
    badge: "Mobile",
    category: "mobile",
  },
  {
    id: "biaya-angkutan",
    name: "Nakutan — Biaya Angkutan",
    tagline: "Kalkulasi otomatis ongkos distribusi beras",
    description:
      "Modul perhitungan biaya angkutan beras lintas Sumatera Barat — tracking SPM, master tarif kendaraan, dan RPC kalkulasi otomatis membandingkan rate kontrak per-kg vs invoice per-trip.",
    url: "#",
    tech: ["React", "Refine", "Supabase", "PostgreSQL RPC", "Ant Design"],
    emoji: "🌾",
    badge: "Core",
    category: "web",
  },
  {
    id: "piutang",
    name: "Piutang Reminder System",
    tagline: "Automasi pengingat tagihan via WhatsApp",
    description:
      "Sistem otomasi pengingat piutang menggunakan n8n workflow — batch offset pagination, routing kontak WhatsApp per entitas via Green API, dengan React dashboard monitoring status pengiriman.",
    url: "#",
    tech: ["n8n", "WhatsApp Green API", "React", "Supabase", "PostgreSQL"],
    emoji: "💬",
    badge: "Auto",
    category: "automation",
  },
];

export const skills: SkillItem[] = [
  {
    icon: "⚛️",
    title: "Frontend",
    tags: ["React", "Next.js", "Refine v5", "Ant Design", "TypeScript"],
  },
  {
    icon: "📱",
    title: "Mobile",
    tags: ["Flutter", "Riverpod", "GoRouter", "Dart"],
  },
  {
    icon: "🗄️",
    title: "Backend & Database",
    tags: ["Supabase", "PostgreSQL", "RLS", "Edge Functions", "REST API"],
  },
  {
    icon: "🤖",
    title: "AI & Automasi",
    tags: ["n8n", "Claude API", "OCR", "WhatsApp API", "Webhook"],
  },
  {
    icon: "☁️",
    title: "Infrastruktur",
    tags: ["Cloudflare R2", "VPS", "CI/CD", "Nginx", "Docker"],
  },
];

export const stats = [
  { value: "5+", label: "Aplikasi Dibangun" },
  { value: "3", label: "Platform (Web, Mobile, Bot)" },
  { value: "500+", label: "Pengguna Aktif" },
  { value: "99%", label: "Uptime Produksi" },
];
