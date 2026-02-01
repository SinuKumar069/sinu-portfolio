import { USER } from "@/features/portfolio/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://sinu.com",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Portfolio",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

export const GITHUB_USERNAME = "SinuKumar069";
export const SOURCE_CODE_GITHUB_REPO = "SinuKumar069/sinu-portfolio";
export const SOURCE_CODE_GITHUB_URL = "https://github.com/SinuKumar069/sinu-portfolio";

export const UTM_PARAMS = {
  utm_source: "sinu.com",
  utm_medium: "referral",
  utm_campaign: "portfolio",
};
