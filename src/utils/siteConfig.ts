import { siteConfig } from "@/data/site";

/**
 * Re-export centralized constants from src/data/site.ts for single-source-of-truth
 */
export const SITE_URL = siteConfig.siteUrl;
export const BRAND_NAME = siteConfig.shortName;
export const BRAND_SHORT_NAME = siteConfig.shortName;
export const FULL_LEGAL_NAME = siteConfig.legalEntity;
export const FORMAL_BRAND_NAME = siteConfig.name;

export const PRIMARY_PHONE = siteConfig.phone;
export const DISPLAY_PHONE = siteConfig.phoneDisplay;
export const TEL_LINK = siteConfig.phoneTel;
export const WHATSAPP_LINK = siteConfig.whatsappUrl;
export const PRIMARY_EMAIL = siteConfig.email;

export const CITY_NAME = siteConfig.city;
export const REGION_NAME = siteConfig.state;
export const COUNTRY_NAME = siteConfig.country;
