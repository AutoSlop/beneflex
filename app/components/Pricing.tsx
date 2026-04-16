const tiers = [
  {
    name: "Starter",
    description:
      "Pensado para empresas que inician su primer programa unificado de beneficios.",
    price: "COP 249.000",
    unit: "/ mes",
    onboarding: "Onboarding desde COP 990.000",
    target: "Hasta 100 empleados",
    features: [
      "Panel corporativo con roles básicos",
      "Hasta 3 bolsillos simultáneos",
      "Tarjeta Visa digital para cada empleado",
      "Reportes estándar exportables",
      "Soporte por correo en horario hábil",
    ],
    highlight: false,
    cta: "Hablar con ventas",
  },
  {
    name: "Growth",
    description:
      "Para áreas de RRHH y finanzas que necesitan escalar políticas entre áreas y ciudades.",
    price: "COP 499.000",
    unit: "/ mes",
    onboarding: "Onboarding desde COP 1.990.000",
    target: "100 a 300 empleados",
    features: [
      "Todo lo del plan Starter",
      "Bolsillos ilimitados y reglas avanzadas",
      "Dashboard en vivo y alertas por consumo",
      "Centros de costo y etiquetas contables",
      "Soporte prioritario y success manager",
    ],
    highlight: true,
    cta: "Solicitar demo",
  },
  {
    name: "Enterprise",
    description:
      "Para compañías con políticas complejas, múltiples filiales y exigencias regulatorias.",
    price: "A medida",
    unit: "",
    onboarding: "Onboarding dedicado",
    target: "300 a 500+ empleados",
    features: [
      "Todo lo del plan Growth",
      "SSO corporativo e integraciones vía API",
      "Configuración multi-entidad y multi-moneda local",
      "SLA y reporting regulatorio a medida",
      "Equipo de implementación dedicado",
    ],
    highlight: false,
    cta: "Agendar consultoría",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative bg-gradient-to-b from-surface/70 to-background"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Planes
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Pricing simple para empresas de 100 a 500 empleados
          </h2>
          <p className="mt-4 text-lg text-muted">
            Todos los planes incluyen la tarjeta Visa digital, el motor
            multi-bolsillo y los reportes exportables. Crece sin renegociar
            contrato con cada proveedor.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <article
              key={t.name}
              className={`relative flex flex-col rounded-3xl border p-7 shadow-sm transition-all ${
                t.highlight
                  ? "border-primary bg-surface ring-2 ring-primary/20"
                  : "border-border bg-surface hover:border-primary/40"
              }`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white shadow-md">
                  Más elegido
                </span>
              )}
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-foreground">
                  {t.name}
                </h3>
                <span className="rounded-full bg-secondary-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
                  {t.target}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted">{t.description}</p>

              <div className="mt-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-semibold tracking-tight text-foreground">
                    {t.price}
                  </span>
                  {t.unit && (
                    <span className="text-sm text-muted">{t.unit}</span>
                  )}
                </div>
                <p className="mt-1 text-xs text-muted">{t.onboarding}</p>
              </div>

              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-muted">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#demo"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all ${
                  t.highlight
                    ? "bg-primary text-white shadow-md hover:bg-primary-dark"
                    : "border border-border bg-surface text-primary hover:border-primary"
                }`}
              >
                {t.cta}
              </a>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted">
          Los precios no incluyen IVA. La emisión de tarjetas y el cupo de
          beneficios son provistos por un aliado emisor regulado.
        </p>
      </div>
    </section>
  );
}
