import type { PropsWithChildren } from "react";
import { useReveal } from "../../hooks/useReveal";
import "./Reveal.css";

export const Reveal = ({ children }: PropsWithChildren) => {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};
