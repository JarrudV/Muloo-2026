import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  ogImage?: string;
  ogType?: string;
  robots?: string;
}

const DEFAULT_TITLE = "Muloo | Technical Systems & AI Acceleration Partner";
const DEFAULT_DESCRIPTION =
  "Cape Town-based engineering consultancy specializing in HubSpot architecture, custom engineering, and AI automation.";
const DEFAULT_OG_IMAGE = "/opengraph.jpg";
const DEFAULT_OG_TYPE = "website";

function setOrCreateMeta(selector: string, attrs: Record<string, string>) {
  let tag = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    Object.entries(attrs).forEach(([key, value]) => tag!.setAttribute(key, value));
    document.head.appendChild(tag);
    return;
  }

  Object.entries(attrs).forEach(([key, value]) => tag!.setAttribute(key, value));
}

export function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = DEFAULT_OG_TYPE,
  robots,
}: SEOProps) {
  useEffect(() => {
    const robotsContent = robots ?? "index,follow";
    document.title = title;

    setOrCreateMeta('meta[name="description"]', {
      name: "description",
      content: description,
    });
    setOrCreateMeta('meta[property="og:title"]', {
      property: "og:title",
      content: title,
    });
    setOrCreateMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    setOrCreateMeta('meta[property="og:image"]', {
      property: "og:image",
      content: ogImage,
    });
    setOrCreateMeta('meta[property="og:type"]', {
      property: "og:type",
      content: ogType,
    });
    setOrCreateMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: title,
    });
    setOrCreateMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });
    setOrCreateMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: ogImage,
    });

    setOrCreateMeta('meta[name="robots"]', {
      name: "robots",
      content: robotsContent,
    });
  }, [title, description, ogImage, ogType, robots]);

  return null;
}
