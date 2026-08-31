/** Absolute site origin shared by metadata, robots.txt and the sitemap. */
function toOrigin(value: string) {
  const url = value.startsWith("http://") || value.startsWith("https://")
    ? value
    : `https://${value}`;

  return new URL(url).origin;
}

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? toOrigin(process.env.NEXT_PUBLIC_SITE_URL)
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? toOrigin(process.env.VERCEL_PROJECT_PRODUCTION_URL)
    : "http://localhost:3000";
