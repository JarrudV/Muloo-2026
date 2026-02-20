import { useEffect } from "react";
import { useLocation } from "wouter";
import { getRouteMeta } from "@/content/meta";

interface SEOProps {
  title?: string;
  description?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  noindex?: boolean;
}

function upsertMeta(
  selector: string,
  attributes: Record<string, string>,
  content: string,
) {
  let tag = document.querySelector(selector) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    Object.entries(attributes).forEach(([key, value]) => {
      tag?.setAttribute(key, value);
    });
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

export function SEO({
  title,
  description,
  ogImage,
  ogType,
  canonical,
  noindex,
}: SEOProps = {}) {
  const [pathname] = useLocation();
  const routeMeta = getRouteMeta(pathname);

  const resolved = {
    title: title ?? routeMeta.title,
    description: description ?? routeMeta.description,
    ogImage: ogImage ?? routeMeta.ogImage,
    ogType: ogType ?? routeMeta.ogType,
    canonical: canonical ?? routeMeta.canonical,
    noindex: typeof noindex === "boolean" ? noindex : routeMeta.noindex,
  };

  useEffect(() => {
    document.title = resolved.title;

    upsertMeta('meta[name="description"]', { name: "description" }, resolved.description);
    upsertMeta('meta[property="og:title"]', { property: "og:title" }, resolved.title);
    upsertMeta(
      'meta[property="og:description"]',
      { property: "og:description" },
      resolved.description,
    );
    upsertMeta('meta[property="og:image"]', { property: "og:image" }, resolved.ogImage);
    upsertMeta('meta[property="og:type"]', { property: "og:type" }, resolved.ogType);
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title" }, resolved.title);
    upsertMeta(
      'meta[name="twitter:description"]',
      { name: "twitter:description" },
      resolved.description,
    );

    let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", resolved.canonical);

    const robotsValue = resolved.noindex ? "noindex,nofollow" : "index,follow";
    upsertMeta('meta[name="robots"]', { name: "robots" }, robotsValue);
  }, [
    resolved.title,
    resolved.description,
    resolved.ogImage,
    resolved.ogType,
    resolved.canonical,
    resolved.noindex,
  ]);

  return null;
}
