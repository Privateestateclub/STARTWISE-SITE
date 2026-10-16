import { useEffect } from "react";

const SUFFIX = "STARTWISE";

/** Met à jour le <title> et la méta description pour la page courante. */
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title ? `${title} · ${SUFFIX}` : SUFFIX;

    if (description) {
      let tag = document.querySelector<HTMLMetaElement>(
        'meta[name="description"]'
      );
      if (!tag) {
        tag = document.createElement("meta");
        tag.name = "description";
        document.head.appendChild(tag);
      }
      tag.content = description;
    }
  }, [title, description]);
}
