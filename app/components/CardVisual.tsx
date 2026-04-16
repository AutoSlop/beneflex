export default function CardVisual() {
  return (
    <div className="relative w-full max-w-md">
      {/* Ambient glow */}
      <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-secondary/30 via-transparent to-primary/30 blur-2xl" />

      {/* Floating pockets tag - left */}
      <div className="absolute -left-6 top-8 hidden rounded-2xl border border-border bg-surface/90 px-3 py-2 shadow-lg backdrop-blur sm:block">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-secondary-soft text-primary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 11l9-8 9 8" />
              <path d="M5 10v10h14V10" />
              <path d="M9 20v-6h6v6" />
            </svg>
          </span>
          <div className="leading-tight">
            <p className="text-[10px] uppercase tracking-wide text-muted">Alimentación</p>
            <p className="text-sm font-semibold text-foreground">COP 420.000</p>
          </div>
        </div>
      </div>

      {/* Floating pockets tag - right */}
      <div className="absolute -right-4 bottom-10 hidden rounded-2xl border border-border bg-surface/90 px-3 py-2 shadow-lg backdrop-blur sm:block">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-secondary-soft text-primary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="7" cy="17" r="2" />
              <circle cx="17" cy="17" r="2" />
              <path d="M5 17H3V9l3-4h9l3 4v8h-2" />
            </svg>
          </span>
          <div className="leading-tight">
            <p className="text-[10px] uppercase tracking-wide text-muted">Transporte</p>
            <p className="text-sm font-semibold text-foreground">COP 180.000</p>
          </div>
        </div>
      </div>

      {/* The card */}
      <div className="relative aspect-[1.58/1] rotate-[-4deg] rounded-3xl bg-gradient-to-br from-[#0B5F58] via-primary to-secondary p-6 shadow-2xl ring-1 ring-white/20">
        {/* Chip + wave */}
        <div className="flex items-start justify-between">
          <div className="flex h-10 w-12 items-center justify-center rounded-md bg-gradient-to-br from-amber-200 to-amber-400/80 shadow-inner">
            <div className="h-5 w-8 rounded-sm border border-amber-500/40" />
          </div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeOpacity="0.85" strokeWidth="2" strokeLinecap="round">
            <path d="M8.5 8.5a5 5 0 010 7" />
            <path d="M11.5 5.5a9 9 0 010 13" />
            <path d="M14.5 2.5a13 13 0 010 19" />
          </svg>
        </div>

        {/* Balance */}
        <div className="mt-7">
          <p className="text-xs uppercase tracking-widest text-white/60">
            Saldo total
          </p>
          <p className="mt-1 text-3xl font-semibold text-white">
            COP 1.250.000
          </p>
        </div>

        {/* Pockets bar */}
        <div className="mt-5 grid grid-cols-4 gap-1">
          <div className="h-1.5 rounded-full bg-white/90" />
          <div className="h-1.5 rounded-full bg-white/70" />
          <div className="h-1.5 rounded-full bg-white/45" />
          <div className="h-1.5 rounded-full bg-white/25" />
        </div>

        {/* Holder */}
        <div className="mt-5 flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-white/60">
              Titular
            </p>
            <p className="mt-0.5 text-sm font-medium tracking-wide text-white">
              MARIA R. GUTIÉRREZ
            </p>
          </div>
          <div className="flex items-end gap-0.5 text-white">
            <span className="inline-block h-6 w-6 rounded-full bg-red-500/90" />
            <span className="-ml-3 inline-block h-6 w-6 rounded-full bg-yellow-400/90" />
            <span className="ml-1 text-xs font-semibold">VISA</span>
          </div>
        </div>
      </div>

      {/* Mini stat card */}
      <div className="absolute -bottom-6 left-6 hidden rounded-2xl border border-border bg-surface/95 px-4 py-3 shadow-xl backdrop-blur md:block">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </span>
          <div>
            <p className="text-[10px] uppercase tracking-wide text-muted">
              Actividad en vivo
            </p>
            <p className="text-sm font-semibold text-foreground">
              248 transacciones hoy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
