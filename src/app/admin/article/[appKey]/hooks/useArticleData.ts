"use client";

import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import type {
  ArticleSection,
  ArticleSectionFormValues,
  ArticleMetaFormValues,
  LandingApp,
} from "@/types";

export function useArticleData(appKey: string) {
  const [app, setApp] = useState<LandingApp | null>(null);
  const [sections, setSections] = useState<ArticleSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAll = useCallback(async () => {
    setLoading(true);
    const supabase = createClient();

    const [appRes, sectionsRes] = await Promise.all([
      supabase.from("landing_apps").select("*").eq("app_key", appKey).single(),
      supabase
        .from("article_sections")
        .select("*")
        .eq("app_key", appKey)
        .order("section_order", { ascending: true }),
    ]);

    if (appRes.error) {
      setError(appRes.error.message);
    } else {
      setApp(appRes.data as LandingApp);
      setError(null);
    }
    setSections((sectionsRes.data as ArticleSection[]) ?? []);
    setLoading(false);
  }, [appKey]);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  const updateMeta = async (values: ArticleMetaFormValues) => {
    const supabase = createClient();
    const { data, error: updateError } = await supabase
      .from("landing_apps")
      .update(values)
      .eq("app_key", appKey)
      .select();
    if (updateError) throw new Error(updateError.message);
    if (!data || data.length === 0) {
      throw new Error(
        "Perubahan tidak tersimpan (kemungkinan diblokir RLS policy untuk UPDATE).",
      );
    }
    await fetchAll();
  };

  const createSection = async (values: ArticleSectionFormValues) => {
    const supabase = createClient();
    const nextOrder = sections.length
      ? Math.max(...sections.map((s) => s.section_order)) + 1
      : 0;
    const { data, error: insertError } = await supabase
      .from("article_sections")
      .insert({ ...values, app_key: appKey, section_order: nextOrder })
      .select();
    if (insertError) throw new Error(insertError.message);
    if (!data || data.length === 0) {
      throw new Error(
        "Data tidak tersimpan (kemungkinan diblokir RLS policy untuk INSERT).",
      );
    }
    await fetchAll();
  };

  const updateSection = async (
    id: string,
    values: ArticleSectionFormValues,
  ) => {
    const supabase = createClient();
    const { data, error: updateError } = await supabase
      .from("article_sections")
      .update(values)
      .eq("id", id)
      .select();
    if (updateError) throw new Error(updateError.message);
    if (!data || data.length === 0) {
      throw new Error(
        "Perubahan tidak tersimpan (kemungkinan diblokir RLS policy untuk UPDATE).",
      );
    }
    await fetchAll();
  };

  const deleteSection = async (id: string) => {
    const supabase = createClient();
    const { data, error: deleteError } = await supabase
      .from("article_sections")
      .delete()
      .eq("id", id)
      .select();
    if (deleteError) throw new Error(deleteError.message);
    if (!data || data.length === 0) {
      throw new Error(
        "Data tidak terhapus (kemungkinan diblokir RLS policy untuk DELETE).",
      );
    }
    await fetchAll();
  };

  const swapOrder = async (a: ArticleSection, b: ArticleSection) => {
    const supabase = createClient();
    await supabase
      .from("article_sections")
      .update({ section_order: b.section_order })
      .eq("id", a.id);
    await supabase
      .from("article_sections")
      .update({ section_order: a.section_order })
      .eq("id", b.id);
    await fetchAll();
  };

  return {
    app,
    sections,
    loading,
    error,
    updateMeta,
    createSection,
    updateSection,
    deleteSection,
    swapOrder,
    refetch: fetchAll,
  };
}
