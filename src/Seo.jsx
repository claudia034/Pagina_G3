import { useEffect } from "react";
import { siteSeo } from "./seo.js";

export default function Seo({ page }) {
  useEffect(() => {
    const setMeta = (attribute, key, content) => {
      let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    document.title = page.title;
    setMeta("name", "description", page.description);
    setMeta("name", "robots", page.noindex ? "noindex, follow" : "index, follow, max-image-preview:large");
    setMeta("property", "og:title", page.title);
    setMeta("property", "og:description", page.description);
    setMeta("name", "twitter:title", page.title);
    setMeta("name", "twitter:description", page.description);
    const imageUrl = new URL(page.image, siteSeo.url).href;
    setMeta("property", "og:image", imageUrl);
    setMeta("name", "twitter:image", imageUrl);
    setMeta("property", "og:image:alt", page.imageAlt);
    setMeta("name", "twitter:image:alt", page.imageAlt);
    // HashRouter routes belong to one document; keep its canonical URL stable.
  }, [page.title, page.description, page.image, page.imageAlt, page.noindex]);

  return null;
}
