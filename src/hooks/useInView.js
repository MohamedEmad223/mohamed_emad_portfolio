import { useState, useEffect, useRef } from "react";

/* Returns [ref, inView]. `inView` flips to true once (and stays true) the first
 * time the referenced element intersects the viewport — used for fade-ins. */
export function useInView(threshold = 0.08) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}
