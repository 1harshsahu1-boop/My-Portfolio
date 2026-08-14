const defaultSiteUrl = "https://harsh-fullstack-portfolio-ten.vercel.app";

function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return defaultSiteUrl;
}

export const siteUrl = resolveSiteUrl();
export const siteName = "Harsh | Full-Stack Engineer";
export const siteTitle = "Harsh | Full-Stack Engineer Portfolio";
export const siteDescription =
  "Portfolio for Harsh, a full-stack engineer building reliable web products across frontend, backend, APIs, cloud infrastructure, and data systems.";

export const siteKeywords = [
  "Harsh full-stack engineer",
  "full-stack engineer portfolio",
  "Next.js developer",
  "React developer",
  "Node.js developer",
  "TypeScript engineer",
  "frontend engineer",
  "backend engineer",
  "cloud engineer",
  "software engineer portfolio",
  "API development",
  "PostgreSQL",
  "AWS",
  "Vercel portfolio",
];

export const socialLinks = {
  github: "https://github.com/1harshsahu1-boop",
  linkedin:
    "https://www.linkedin.com/in/harsh-sahu-634917414?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  email: "mailto:hello@harsh.dev",
};

export const absoluteUrl = (path = "/") => new URL(path, siteUrl).toString();
