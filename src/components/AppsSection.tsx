import { createClient } from "@/utils/supabase/server";
import type { LandingApp } from "@/types";
import AppsGrid from "./AppsGrid";

export default async function AppsSection() {
  const supabase = createClient();
  const { data: apps } = await supabase
    .from("landing_apps")
    .select("*")
    .order("sort_order", { ascending: true });

  return (
    <section className="section" id="apps">
      <div className="container">
        <span className="s-tag">// projects</span>
        <h2 className="s-title">Aplikasi yang Saya Bangun</h2>
        <p className="s-sub">
          Sistem nyata yang berjalan di produksi — mengelola logistik,
          distribusi pangan, dan operasional lapangan setiap hari.
        </p>
      </div>

      <AppsGrid apps={(apps as LandingApp[]) ?? []} />
    </section>
  );
}
