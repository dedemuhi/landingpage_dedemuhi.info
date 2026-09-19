"use client";

import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import type { LandingApp, LandingAppFormValues } from "@/types";

export function useLandingApps() {
  const [apps, setApps] = useState<LandingApp[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchApps = useCallback(async () => {
    setLoading(true);
    const supabase = createClient();
    const { data, error: fetchError } = await supabase
      .from("landing_apps")
      .select("*")
      .order("sort_order", { ascending: true });

    if (fetchError) {
      setError(fetchError.message);
    } else {
      setApps(data ?? []);
      setError(null);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchApps();
  }, [fetchApps]);

  const createApp = async (values: LandingAppFormValues) => {
    const supabase = createClient();
    const { data, error: insertError } = await supabase
      .from("landing_apps")
      .insert({
        ...values,
        badge: values.badge || null,
        cta_label: values.cta_label || null,
      })
      .select();
    if (insertError) throw new Error(insertError.message);
    if (!data || data.length === 0) {
      throw new Error(
        "Data tidak tersimpan (kemungkinan diblokir RLS policy untuk INSERT).",
      );
    }
    await fetchApps();
  };

  const updateApp = async (id: string, values: LandingAppFormValues) => {
    const supabase = createClient();
    const { data, error: updateError } = await supabase
      .from("landing_apps")
      .update({
        ...values,
        badge: values.badge || null,
        cta_label: values.cta_label || null,
      })
      .eq("id", id)
      .select();
    if (updateError) throw new Error(updateError.message);
    if (!data || data.length === 0) {
      throw new Error(
        "Perubahan tidak tersimpan (kemungkinan diblokir RLS policy untuk UPDATE).",
      );
    }
    await fetchApps();
  };

  const deleteApp = async (id: string) => {
    const supabase = createClient();
    const { data, error: deleteError } = await supabase
      .from("landing_apps")
      .delete()
      .eq("id", id)
      .select();
    if (deleteError) throw new Error(deleteError.message);
    if (!data || data.length === 0) {
      throw new Error(
        "Data tidak terhapus (kemungkinan diblokir RLS policy untuk DELETE).",
      );
    }
    await fetchApps();
  };

  const reorderApp = async (id: string, newSortOrder: number) => {
    const supabase = createClient();
    const { data, error: reorderError } = await supabase
      .from("landing_apps")
      .update({ sort_order: newSortOrder })
      .eq("id", id)
      .select();
    if (reorderError) throw new Error(reorderError.message);
    if (!data || data.length === 0) {
      throw new Error(
        "Urutan tidak tersimpan (kemungkinan diblokir RLS policy untuk UPDATE).",
      );
    }
    await fetchApps();
  };

  return {
    apps,
    loading,
    error,
    createApp,
    updateApp,
    deleteApp,
    reorderApp,
    refetch: fetchApps,
  };
}
