const modules = [
  {
    title: "Panel corporativo",
    body:
      "Crea programas, carga empleados y asigna cupos por categoría. Roles para RRHH, finanzas y administradores.",
    icon: "layout",
  },
  {
    title: "Tarjeta Visa digital",
    body:
      "Una tarjeta por empleado, lista en minutos para usar en web, POS y billeteras móviles.",
    icon: "card",
  },
  {
    title: "Motor multi-bolsillo",
    body:
      "Reglas programables por categoría, comercio, horario y límites. Validación en cada transacción.",
    icon: "pockets",
  },
  {
    title: "KYB / KYC y compliance inicial",
    body:
      "Onboarding guiado para la empresa y cada colaborador, con validaciones regulatorias de base.",
    icon: "shield",
  },
  {
    title: "Reportes y conciliación",
    body:
      "Dashboards en tiempo real y exportables a CSV y Excel para cierre contable y auditoría.",
    icon: "chart",
  },
  {
    title: "Dashboard de dashboards",
    body:
      "Vista consolidada por programa, centro de costo y categoría, con alertas de consumo.",
    icon: "dashboard",
  },
];

export default function Modules() {
  return (
    <section
      id="modulos"
      className="relative bg-gradient-to-b from-background to-surface/70"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Módulos del producto
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Todo lo que necesitas para operar beneficios, en una sola plataforma
            </h2>
          </div>
          <p className="max-w-md text-muted">
            Cada módulo se integra con los demás para que no dependas de hojas
            de cálculo ni de proveedores externos para cerrar el mes.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m) => (
            <article
              key={m.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary">
                <ModuleIcon name={m.icon} />
              </span>
              <h3 className="mt-5 text-base font-semibold text-foreground">
                {m.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {m.body}
              </p>
              <span className="pointer-events-none absolute -right-8 -bottom-8 h-28 w-28 rounded-full bg-secondary/10 opacity-0 transition-opacity group-hover:opacity-100" />
            </article>
          ))}
        </div>

        <DashboardMockup />
      </div>
    </section>
  );
}

function ModuleIcon({ name }: { name: string }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "layout":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
      );
    case "card":
      return (
        <svg {...common}>
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
      );
    case "pockets":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="7" height="7" rx="1.5" />
          <rect x="14" y="4" width="7" height="7" rx="1.5" />
          <rect x="3" y="13" width="7" height="7" rx="1.5" />
          <rect x="14" y="13" width="7" height="7" rx="1.5" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path d="M3 3v18h18" />
          <rect x="7" y="12" width="3" height="6" />
          <rect x="12" y="8" width="3" height="10" />
          <rect x="17" y="4" width="3" height="14" />
        </svg>
      );
    case "dashboard":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      );
    default:
      return null;
  }
}

function DashboardMockup() {
  const pockets = [
    { label: "Alimentación", pct: 68, value: "COP 42.1M" },
    { label: "Transporte", pct: 42, value: "COP 18.3M" },
    { label: "Salud", pct: 55, value: "COP 11.8M" },
    { label: "Educación", pct: 28, value: "COP 7.2M" },
  ];
  return (
    <div className="mt-16 overflow-hidden rounded-3xl border border-border bg-surface shadow-xl">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-background/60 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        <span className="ml-3 text-xs text-muted">
          app.beneflex.co / panel / programas
        </span>
      </div>

      <div className="grid gap-0 md:grid-cols-[220px_1fr]">
        {/* Sidebar */}
        <aside className="hidden border-r border-border bg-background/40 p-5 md:block">
          <p className="text-[10px] uppercase tracking-widest text-muted">
            Empresa
          </p>
          <p className="mt-1 text-sm font-semibold text-foreground">
            Grupo Andes
          </p>

          <nav className="mt-6 space-y-1 text-sm">
            {[
              { label: "Resumen", active: true },
              { label: "Programas" },
              { label: "Empleados" },
              { label: "Transacciones" },
              { label: "Reportes" },
              { label: "Compliance" },
            ].map((i) => (
              <div
                key={i.label}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 ${
                  i.active
                    ? "bg-primary/10 text-primary"
                    : "text-muted hover:text-foreground"
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                {i.label}
              </div>
            ))}
          </nav>
        </aside>

        {/* Main */}
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h4 className="text-lg font-semibold text-foreground">
                Programa de beneficios · Abril 2026
              </h4>
              <p className="text-sm text-muted">
                412 empleados activos · 4 categorías
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
                En vivo
              </span>
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                Exportar
              </span>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <Stat label="Gasto del mes" value="COP 79.4M" trend="+4.2%" />
            <Stat label="Tarjetas activas" value="412" trend="+18 vs. mar" positive />
            <Stat label="Transacciones" value="8.120" trend="+6.9%" positive />
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-border p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                Uso por bolsillo
              </p>
              <ul className="mt-4 space-y-4">
                {pockets.map((p) => (
                  <li key={p.label}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-foreground">
                        {p.label}
                      </span>
                      <span className="text-muted">{p.value}</span>
                    </div>
                    <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-border">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                        style={{ width: `${p.pct}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                Últimas transacciones
              </p>
              <ul className="mt-4 divide-y divide-border">
                {[
                  ["Maria G.", "Restaurante Fragola", "Alimentación", "COP 38.500"],
                  ["Julián R.", "TransMilenio", "Transporte", "COP 2.950"],
                  ["Sofía L.", "Cruz Azul Salud", "Salud", "COP 120.000"],
                  ["Andrés M.", "Platzi", "Educación", "COP 89.000"],
                ].map((row, idx) => (
                  <li
                    key={idx}
                    className="grid grid-cols-[1fr_auto] items-center gap-2 py-2 text-sm"
                  >
                    <div>
                      <p className="font-medium text-foreground">{row[0]}</p>
                      <p className="text-xs text-muted">
                        {row[1]} · {row[2]}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-foreground">
                      {row[3]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  trend,
  positive,
}: {
  label: string;
  value: string;
  trend: string;
  positive?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-border p-4">
      <p className="text-xs font-medium uppercase tracking-widest text-muted">
        {label}
      </p>
      <p className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
        {value}
      </p>
      <p
        className={`mt-1 text-xs font-medium ${
          positive ? "text-primary" : "text-muted"
        }`}
      >
        {trend}
      </p>
    </div>
  );
}
