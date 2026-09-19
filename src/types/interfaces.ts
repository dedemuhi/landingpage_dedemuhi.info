export interface LandingApp {
  id: string;
  app_key: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  tech: string[];
  emoji: string;
  badge: string | null;
  category: "web" | "mobile" | "automation";
  cta_label: string | null;
  is_featured: boolean;
  sort_order: number;
  intro_text: string | null;
  apk_url: string | null;
  apk_version: string | null;
  apk_size: string | null;
  cta_title: string | null;
  cta_description: string | null;
  disclaimer_text: string | null;
  created_at: string;
  updated_at: string;
}

export interface SkillItem {
  icon: string;
  title: string;
  tags: string[];
}

export interface LandingAppFormValues {
  app_key: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  tech: string[];
  emoji: string;
  badge: string;
  category: "web" | "mobile" | "automation";
  cta_label: string;
  is_featured: boolean;
  sort_order: number;
}

export interface ArticleSection {
  id: string;
  app_key: string;
  section_order: number;
  emoji: string;
  title: string;
  description: string;
  image_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface ArticleSectionFormValues {
  emoji: string;
  title: string;
  description: string;
  image_url: string;
}

export interface ArticleMetaFormValues {
  intro_text: string;
  apk_url: string;
  apk_version: string;
  apk_size: string;
  cta_title: string;
  cta_description: string;
  disclaimer_text: string;
}
