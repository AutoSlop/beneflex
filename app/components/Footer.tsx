export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-surface/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="6" width="18" height="12" rx="2.5" />
                <path d="M3 10h18" />
                <path d="M7 15h3" />
              </svg>
            </span>
            <span className="text-base font-semibold text-foreground">
              BeneFlex
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted">
            Una sola tarjeta Visa digital con multi-bolsillo para gestionar los
            beneficios laborales de tu empresa en Colombia.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-foreground">
            Producto
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["#como-funciona", "Cómo funciona"],
              ["#modulos", "Módulos"],
              ["#pricing", "Pricing"],
              ["#faq", "FAQ"],
            ].map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-muted transition-colors hover:text-primary"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-foreground">
            Compañía
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href="#compliance"
                className="text-muted transition-colors hover:text-primary"
              >
                Compliance
              </a>
            </li>
            <li>
              <a
                href="#demo"
                className="text-muted transition-colors hover:text-primary"
              >
                Solicitar demo
              </a>
            </li>
            <li>
              <a
                href="#beneficios"
                className="text-muted transition-colors hover:text-primary"
              >
                Casos de uso
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-foreground">
            Contacto
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <a
                href="mailto:info@example.com"
                className="transition-colors hover:text-primary"
              >
                info@example.com
              </a>
            </li>
            <li>+00 000 000 0000</li>
            <li>123 Main Street, City, Country</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-6 text-xs text-muted md:flex-row md:items-center">
          <p>
            © {year} BeneFlex. Operado con un aliado emisor regulado en
            Colombia.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="transition-colors hover:text-primary">
              Términos
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Privacidad
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Seguridad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
