const companies = [
  "Grupo Andes",
  "Nodo Retail",
  "Fintech Caribe",
  "Salud Verde",
  "Lumen Energy",
  "Tecnocampo",
];

export default function Logos() {
  return (
    <section aria-label="Empresas objetivo" className="border-y border-border bg-surface/60">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-muted">
          Empresas medianas y grandes que confían en soluciones como BeneFlex
        </p>
        <div className="mt-8 grid grid-cols-2 items-center justify-items-center gap-6 opacity-80 sm:grid-cols-3 md:grid-cols-6">
          {companies.map((name) => (
            <LogoPlaceholder key={name} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoPlaceholder({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 text-muted transition-colors hover:text-primary">
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border bg-surface">
        <span className="h-2.5 w-2.5 rounded-sm bg-gradient-to-br from-primary to-secondary" />
      </span>
      <span className="text-sm font-semibold tracking-tight">{name}</span>
    </div>
  );
}
