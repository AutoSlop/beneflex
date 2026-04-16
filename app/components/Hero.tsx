import CardVisual from "./CardVisual";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none absolute -top-32 -right-24 h-[520px] w-[520px] rounded-full accent-blur" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pt-16 pb-24 md:grid-cols-2 md:gap-16 md:pt-24 md:pb-32">
        <div className="max-w-xl text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-xs font-medium text-primary shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            Fintech B2B · Colombia
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Una sola tarjeta{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">Visa digital</span>
              <span className="absolute bottom-1 left-0 z-0 h-3 w-full rounded-sm bg-secondary/35" />
            </span>{" "}
            para todos los beneficios de tu empresa
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted">
            Asigna alimentación, transporte, salud o educación en bolsillos
            separados con reglas programables, control en tiempo real y menos
            carga operativa para RRHH y finanzas en Colombia.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-primary-dark hover:shadow-lg"
            >
              Solicitar demo
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-secondary-soft/50"
            >
              Ver cómo funciona
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-6">
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted">
                Bolsillos
              </dt>
              <dd className="mt-1 text-2xl font-semibold text-foreground">4+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted">
                Empleados
              </dt>
              <dd className="mt-1 text-2xl font-semibold text-foreground">
                100–500
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted">
                Tarjetas
              </dt>
              <dd className="mt-1 text-2xl font-semibold text-foreground">
                100% digitales
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <CardVisual />
        </div>
      </div>
    </section>
  );
}
