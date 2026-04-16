const rrhh = {
  label: "Para RRHH",
  title: "Más impacto, menos operación manual",
  points: [
    {
      title: "Implementación simple",
      body:
        "Onboarding guiado en semanas, no en trimestres. Sin cambiar proveedores de nómina.",
    },
    {
      title: "Mejor experiencia del empleado",
      body:
        "Una sola tarjeta, una sola app. Claridad total sobre cupos y categorías.",
    },
    {
      title: "Reglas flexibles por política",
      body:
        "Ajusta cupos por cargo, ciudad o programa sin pedir desarrollo a TI.",
    },
  ],
};

const finanzas = {
  label: "Para Finanzas",
  title: "Control presupuestal y conciliación sin dolor",
  points: [
    {
      title: "Menos conciliación manual",
      body:
        "Todo el gasto queda consolidado en un solo sistema, con trazabilidad por bolsillo.",
    },
    {
      title: "Mayor control presupuestal",
      body:
        "Topes por categoría, centro de costo y empleado, aplicados en el momento de la compra.",
    },
    {
      title: "Reportes listos para auditoría",
      body:
        "Exporta CSV o Excel por periodo, con reglas, transacciones y responsables.",
    },
  ],
};

export default function Benefits() {
  return (
    <section id="beneficios" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Valor B2B
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Una misma plataforma, dos equipos felices
          </h2>
          <p className="mt-4 text-lg text-muted">
            BeneFlex está diseñado para que RRHH lance programas con rapidez y
            para que finanzas mantenga el control del gasto, sin multiplicar
            tareas.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <BenefitCard variant="primary" data={rrhh} />
          <BenefitCard variant="secondary" data={finanzas} />
        </div>
      </div>
    </section>
  );
}

type CardProps = {
  variant: "primary" | "secondary";
  data: typeof rrhh;
};

function BenefitCard({ variant, data }: CardProps) {
  const accent =
    variant === "primary"
      ? "from-primary to-primary-dark"
      : "from-secondary to-primary";
  return (
    <div className="rounded-3xl border border-border bg-surface p-8 shadow-sm">
      <div className="flex items-center gap-3">
        <span
          className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-sm`}
        >
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
            {variant === "primary" ? (
              <>
                <circle cx="9" cy="7" r="4" />
                <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
                <circle cx="17" cy="7" r="3" />
              </>
            ) : (
              <>
                <path d="M3 3v18h18" />
                <path d="M7 15l4-4 4 4 5-6" />
              </>
            )}
          </svg>
        </span>
        <span className="text-xs font-semibold uppercase tracking-widest text-muted">
          {data.label}
        </span>
      </div>

      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
        {data.title}
      </h3>

      <ul className="mt-6 space-y-5">
        {data.points.map((p) => (
          <li key={p.title} className="flex gap-3">
            <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-secondary-soft text-primary">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">{p.title}</p>
              <p className="mt-1 text-sm text-muted">{p.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
