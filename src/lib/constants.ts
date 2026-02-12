export const SITE_URL = "https://studio.centurysync.com";
export const SITE_NAME = "CenturySync Studio";
export const WEBHOOK_URL =
  process.env.NEXT_PUBLIC_WEBHOOK_URL ||
  "https://nextgen.pocarles.com/webhook/7acd8b37-c87c-4eea-acbe-efdee93c5ede";

export const CONTACT = {
  email: "po@centurysync.com",
  phone: "(561) 562-4300",
  address: "100-110 Century Blvd, Suite 202, West Palm Beach, FL 33417",
  linkedin: "https://linkedin.com/in/pocarles",
} as const;
