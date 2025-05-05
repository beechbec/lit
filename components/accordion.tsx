import React from "react";

export function Accordion({ children }: { children: React.ReactNode }) {
  return <div className="accordion">{children}</div>;
}

export function AccordionItem({ children }: { children: React.ReactNode }) {
  return <div className="accordion-item">{children}</div>;
}

export function AccordionTrigger({ children }: { children: React.ReactNode }) {
  return <button className="accordion-trigger">{children}</button>;
}

export function AccordionContent({ children }: { children: React.ReactNode }) {
  return <div className="accordion-content">{children}</div>;
}