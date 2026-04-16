const steps = [
  {
    n: "01",
    title: "Diseñas el programa",
    body:
      "Desde el panel corporativo creas programas de beneficios, cargas empleados por área y defines cupos por categoría: alimentación, transporte, salud y educación.",
    bullets: [
      "Cargue masivo vía CSV o API",
      "Reglas por comercio, horario y categoría",
      "Presupuestos mensuales por empleado",
    ],
  },
  {
    n: "02",
    title: "Cada empleado recibe su tarjeta Visa digital",
    body:
      "La tarjeta se activa en minutos, lista para usar en web, POS y billeteras móviles. Sin plásticos, sin logística, sin demoras.",
    bullets: [
      "Alta instantánea con KYC",
      "Compatible con Apple Pay y Google Pay",
      "Saldo y bolsillos visibles en la app",
    ],
  },
  {
    n: "03",
    title: "Controlas y concilias en tiempo real",
    body:
      "El motor multi-bolsillo aplica reglas por categoría en cada transacción. Tú ves el gasto por empleado, centro de costo y bolsillo, listo para conciliar.",
    bullets: [
      "Dashboard en vivo para RRHH y finanzas",
      "Reportes exportables a CSV y Excel",
      "Alertas de consumo y topes",
    ],
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative bg-gradient-to-b from-surface/60 to-background"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Cómo funciona
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Tres pasos entre tu empresa y una operación sin fricción
          </h2>
          <p className="mt-4 text-lg text-muted">
            Pensado para equipos de RRHH y finanzas que necesitan lanzar rápido
            y operar con control, sin proyectos de integración eternos.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className="relative rounded-3xl border border-border bg-surface p-7 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-sm font-semibold text-white shadow-sm">
                  {s.n}
                </span>
                {i < steps.length - 1 && (
                  <span className="hidden h-px flex-1 bg-gradient-to-r from-border to-transparent md:block" />
                )}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
              <ul className="mt-5 space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="mt-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-secondary-soft text-primary">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-muted">{b}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
