"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿En qué comercios se puede usar la tarjeta BeneFlex?",
    a: "La tarjeta opera sobre la red Visa, por lo que es aceptada en comercios físicos y en línea que reciben Visa en Colombia y el exterior. Además, el motor multi-bolsillo puede restringir categorías por MCC (por ejemplo, solo restaurantes y supermercados para el bolsillo de alimentación).",
  },
  {
    q: "¿Qué categorías de beneficios se pueden configurar?",
    a: "En el MVP ofrecemos los bolsillos más comunes en programas corporativos: alimentación, transporte, salud y educación. Cada bolsillo tiene sus propias reglas, topes y comercios autorizados, y se pueden añadir más categorías a medida que la empresa las necesite.",
  },
  {
    q: "¿Cuánto tarda la implementación?",
    a: "La implementación típica tarda entre 2 y 6 semanas, dependiendo del tamaño y la complejidad. Incluye el onboarding KYB de la empresa, la carga de empleados, la definición de reglas y un plan de comunicación interno.",
  },
  {
    q: "¿Cómo se garantiza la seguridad del dinero y de los datos?",
    a: "Trabajamos con un aliado emisor regulado, aplicamos controles KYC y AML, cifrado en tránsito y en reposo, y manejo PCI en proveedores certificados. Cada transacción queda trazada con usuario, bolsillo y regla aplicada para auditoría.",
  },
  {
    q: "¿BeneFlex reemplaza a mi proveedor de nómina?",
    a: "No. BeneFlex reemplaza y consolida a los múltiples proveedores de bonos y beneficios, pero se integra con tu proveedor de nómina para recibir novedades de empleados y ajustar cupos.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Preguntas frecuentes
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Las dudas que resolvemos antes de una demo
          </h2>
        </div>

        <div className="mt-10 divide-y divide-border rounded-3xl border border-border bg-surface shadow-sm">
          {faqs.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-background/40"
                >
                  <span className="text-base font-semibold text-foreground">
                    {item.q}
                  </span>
                  <span
                    className={`mt-0.5 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-secondary-soft text-primary transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm leading-relaxed text-muted">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
