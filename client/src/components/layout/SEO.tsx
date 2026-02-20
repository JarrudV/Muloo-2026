import React, { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  noindex?: boolean;
}

const DEFAULT_TITLE = "Muloo | Technical Systems & AI Acceleration Partner";
const DEFAULT_DESCRIPTION = "Cape Town-based engineering consultancy specializing in HubSpot architecture, custom engineering, and AI automation.";
const DEFAULT_OG_IMAGE = "/opengraph.jpg";
const DEFAULT_OG_TYPE = "website";

export function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = DEFAULT_OG_TYPE,
  canonical,
  noindex,
}: SEOProps) {
  useEffect(() => {
    // Update Document Title
    document.title = title;

    // Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Update OG Title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", title);
    }

    // Update OG Description
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute("content", description);
    }

    // Update OG Image
    const ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) {
      ogImg.setAttribute("content", ogImage);
    }

    // Update OG Type
    const ogTypeTag = document.querySelector('meta[property="og:type"]');
    if (ogTypeTag) {
      ogTypeTag.setAttribute("content", ogType);
    }

    // Update Twitter Title
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute("content", title);
    }

    // Update Twitter Description
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) {
      twitterDesc.setAttribute("content", description);
    }

    // Update canonical only when provided by route/page metadata
    if (canonical) {
      let canonicalTag = document.querySelector('link[rel="canonical"]');
      if (!canonicalTag) {
        canonicalTag = document.createElement("link");
        canonicalTag.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalTag);
      }
      canonicalTag.setAttribute("href", canonical);
    }

    // Apply robots only when explicitly passed
    if (typeof noindex === "boolean") {
      const robotsValue = noindex ? "noindex,nofollow" : "index,follow";
      const robotsTag = document.querySelector('meta[name="robots"]');
      if (robotsTag) {
        robotsTag.setAttribute("content", robotsValue);
      } else {
        const meta = document.createElement("meta");
        meta.setAttribute("name", "robots");
        meta.setAttribute("content", robotsValue);
        document.head.appendChild(meta);
      }
    }
  }, [title, description, ogImage, ogType, canonical, noindex]);

  return null;
}
