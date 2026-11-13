import { useEffect, useRef } from "react";

const revealEntries: IntersectionObserverCallback = (entries) => {
  for (const entry of entries) {
    entry.target.classList.toggle("is-visible", entry.isIntersecting);
  }
};

export const useReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (
      !element ||
      !window.IntersectionObserver ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    element.classList.add("reveal-ready");
    const observer = new IntersectionObserver(revealEntries, {
      threshold: 0,
      rootMargin: "0px 0px -48px 0px",
    });
    observer.observe(element);
    return () => {
      observer.disconnect();
      element.classList.remove("reveal-ready", "is-visible");
    };
  }, []);
  return ref;
};
