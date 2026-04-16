const items = [
  {
    title: "Aliado emisor autorizado",
    body:
      "Operamos sobre la infraestructura de un aliado emisor regulado, con red Visa y capacidad de emisión digital instantánea.",
  },
  {
    title: "Controles KYC y AML",
    body:
      "Validación de identidad para empresa y empleados, listas restrictivas y monitoreo transaccional continuo.",
  },
  {
    title: "Trazabilidad completa",
    body:
      "Cada transacción queda registrada con usuario, bolsillo, regla aplicada y timestamp para auditoría.",
  },
  {
    title: "Reporting regulatorio en Colombia",
    body:
      "Formatos y controles diseñados para las exigencias regulatorias locales y el cierre contable mensual.",
  },
];

export default function Compliance() {
  return (
    <section id="compliance" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Compliance y seguridad
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Construido para operar con la banca y con los reguladores
            </h2>
            <p className="mt-4 text-lg text-muted">
              BeneFlex se apoya en un aliado emisor regulado y aporta los
              controles, reportes y trazabilidad que RRHH, finanzas y el equipo
              legal esperan encontrar en un producto fintech serio.
            </p>

            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-border bg-surface p-4 shadow-sm">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Datos cifrados en tránsito y en reposo
                </p>
                <p className="text-sm text-muted">
                  Tokens PCI en proveedor certificado, principios de mínimo
                  privilegio y registros inmutables.
                </p>
              </div>
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {items.map((i) => (
              <li
                key={i.title}
                className="rounded-2xl border border-border bg-surface p-6 shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-secondary-soft text-primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <h3 className="text-sm font-semibold text-foreground">
                    {i.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {i.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
