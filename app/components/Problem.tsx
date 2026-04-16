const pains = [
  {
    title: "Múltiples proveedores, múltiples tarjetas",
    body:
      "Bonos de alimentación por un lado, subsidios de transporte por otro, convenios de educación manuales. Cada beneficio es una integración distinta.",
  },
  {
    title: "Conciliación manual todos los meses",
    body:
      "Exceles, facturas sueltas y validaciones línea por línea entre nómina, contabilidad y los proveedores externos.",
  },
  {
    title: "Cero visibilidad en tiempo real",
    body:
      "RRHH y finanzas no saben cuánto se gastó, en qué categoría, ni qué empleado se quedó sin cupo hasta fin de mes.",
  },
  {
    title: "Experiencia del empleado fragmentada",
    body:
      "Varias apps, varios saldos, topes que se cruzan y reglas que nadie entiende. Los beneficios dejan de sentirse como un beneficio.",
  },
];

export default function Problem() {
  return (
    <section id="problema" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            El problema
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Gestionar beneficios laborales en Colombia todavía es un rompecabezas
          </h2>
          <p className="mt-4 text-lg text-muted">
            Las empresas medianas y grandes trabajan con proveedores dispersos,
            procesos manuales y poca trazabilidad. El resultado: más costo
            operativo para RRHH y finanzas, y una experiencia pobre para los
            empleados.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pains.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-secondary-soft text-primary">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </span>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
