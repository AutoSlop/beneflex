"use client";

import { useMemo, useState } from "react";

const WASTE_REDUCTION = 0.8;

const LIMITS = {
  employees: { min: 50, max: 5000, step: 10, default: 250 },
  budgetPerEmployee: {
    min: 50_000,
    max: 2_000_000,
    step: 10_000,
    default: 300_000,
  },
  waste: { min: 1, max: 30, step: 1, default: 15 },
};

const copFormatter = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

const numberFormatter = new Intl.NumberFormat("es-CO");

function clamp(value: number, min: number, max: number) {
  if (!Number.isFinite(value)) return min;
  return Math.max(min, Math.min(max, value));
}

export default function Simulator() {
  const [employees, setEmployees] = useState(LIMITS.employees.default);
  const [budgetPerEmployee, setBudgetPerEmployee] = useState(
    LIMITS.budgetPerEmployee.default,
  );
  const [waste, setWaste] = useState(LIMITS.waste.default);

  const results = useMemo(() => {
    const gastoMensualActual = employees * budgetPerEmployee;
    const desperdicioMensual = gastoMensualActual * (waste / 100);
    const ahorroMensualConBeneFlex = Math.max(0, desperdicioMensual * WASTE_REDUCTION);
    const ahorroAnualConBeneFlex = ahorroMensualConBeneFlex * 12;
    const desperdicioResidual = Math.max(0, desperdicioMensual - ahorroMensualConBeneFlex);
    const residualShare = desperdicioMensual > 0
      ? (desperdicioResidual / desperdicioMensual) * 100
      : 0;
    return {
      gastoMensualActual,
      desperdicioMensual,
      ahorroMensualConBeneFlex,
      ahorroAnualConBeneFlex,
      desperdicioResidual,
      residualShare,
    };
  }, [employees, budgetPerEmployee, waste]);

  return (
    <section id="simulador" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full accent-blur opacity-60" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Simulador de ahorro
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Calcula cuánto podría ahorrar tu empresa
          </h2>
          <p className="mt-4 text-lg text-muted">
            Estimación comparativa frente a vales tradicionales. Ajusta las
            variables de tu empresa y observa, en tiempo real, cuánto del
            desperdicio actual podrías recuperar asignando beneficios por
            categoría con reglas de uso.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm sm:p-8">
            <SliderField
              label="Número de empleados"
              suffix="empleados"
              value={employees}
              min={LIMITS.employees.min}
              max={LIMITS.employees.max}
              step={LIMITS.employees.step}
              display={numberFormatter.format(employees)}
              onChange={(v) =>
                setEmployees(clamp(Math.round(v), LIMITS.employees.min, LIMITS.employees.max))
              }
            />

            <SliderField
              label="Presupuesto mensual por empleado"
              suffix="COP / empleado"
              value={budgetPerEmployee}
              min={LIMITS.budgetPerEmployee.min}
              max={LIMITS.budgetPerEmployee.max}
              step={LIMITS.budgetPerEmployee.step}
              display={copFormatter.format(budgetPerEmployee)}
              onChange={(v) =>
                setBudgetPerEmployee(
                  clamp(
                    Math.round(v),
                    LIMITS.budgetPerEmployee.min,
                    LIMITS.budgetPerEmployee.max,
                  ),
                )
              }
            />

            <SliderField
              label="Desperdicio actual con vales tradicionales"
              suffix="%"
              value={waste}
              min={LIMITS.waste.min}
              max={LIMITS.waste.max}
              step={LIMITS.waste.step}
              display={`${waste}%`}
              onChange={(v) =>
                setWaste(clamp(Math.round(v), LIMITS.waste.min, LIMITS.waste.max))
              }
              last
            />

            <div className="mt-6 rounded-2xl border border-border bg-background px-4 py-3 text-xs text-muted">
              <strong className="font-semibold text-primary">
                Gasto mensual actual estimado:
              </strong>{" "}
              {copFormatter.format(results.gastoMensualActual)} — BeneFlex
              reduce gran parte del desperdicio al asignar beneficios por
              categoría y reglas de uso en tiempo real.
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <ResultCard
              eyebrow="Ahorro estimado"
              label="Ahorro anual con BeneFlex"
              value={copFormatter.format(results.ahorroAnualConBeneFlex)}
              hint={`${copFormatter.format(results.ahorroMensualConBeneFlex)} al mes`}
              highlight
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <ResultCard
                label="Ahorro mensual estimado"
                value={copFormatter.format(results.ahorroMensualConBeneFlex)}
              />
              <ResultCard
                label="Desperdicio actual estimado"
                value={copFormatter.format(results.desperdicioMensual)}
                hint={`${waste}% del presupuesto mensual`}
              />
            </div>

            <ComparisonBar
              wasteAmount={results.desperdicioMensual}
              residualAmount={results.desperdicioResidual}
              residualShare={results.residualShare}
            />

            <a
              href="#demo"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-primary-dark hover:shadow-lg"
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
                className="transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="M13 5l7 7-7 7" />
              </svg>
            </a>

            <p className="text-xs text-muted">
              Estimación referencial. Los resultados dependen de la política de
              beneficios y uso real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

type SliderFieldProps = {
  label: string;
  suffix: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (v: number) => void;
  last?: boolean;
};

function SliderField({
  label,
  suffix,
  value,
  min,
  max,
  step,
  display,
  onChange,
  last,
}: SliderFieldProps) {
  const percent = ((value - min) / (max - min)) * 100;
  const trackStyle = {
    background: `linear-gradient(to right, var(--primary) 0%, var(--secondary) ${percent}%, var(--border) ${percent}%, var(--border) 100%)`,
  } as React.CSSProperties;
  const id = label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={last ? "" : "mb-6"}>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <label
          htmlFor={`${id}-range`}
          className="text-sm font-medium text-foreground"
        >
          {label}
        </label>
        <div className="flex items-center gap-2">
          <input
            id={`${id}-number`}
            type="number"
            inputMode="numeric"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            aria-label={`${label} (valor exacto)`}
            className="h-9 w-36 rounded-xl border border-border bg-background px-3 text-right text-sm font-semibold text-foreground focus:border-primary focus:outline-none"
          />
          <span className="text-xs text-muted">{suffix}</span>
        </div>
      </div>

      <input
        id={`${id}-range`}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        className="simulator-range mt-3 w-full cursor-pointer appearance-none"
        style={trackStyle}
      />

      <div className="mt-1.5 flex justify-between text-[11px] text-muted">
        <span>{formatBound(min, suffix)}</span>
        <span className="font-semibold text-primary">{display}</span>
        <span>{formatBound(max, suffix)}</span>
      </div>
    </div>
  );
}

function formatBound(value: number, suffix: string) {
  if (suffix === "%") return `${value}%`;
  if (suffix.startsWith("COP")) {
    if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
    if (value >= 1_000) return `${(value / 1_000).toFixed(0)}k`;
    return numberFormatter.format(value);
  }
  return numberFormatter.format(value);
}

type ResultCardProps = {
  eyebrow?: string;
  label: string;
  value: string;
  hint?: string;
  highlight?: boolean;
};

function ResultCard({ eyebrow, label, value, hint, highlight }: ResultCardProps) {
  if (highlight) {
    return (
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-dark via-primary to-secondary p-6 text-white shadow-lg sm:p-7">
        <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
        {eyebrow && (
          <p className="relative text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
            {eyebrow}
          </p>
        )}
        <p className="relative mt-2 text-sm text-white/80">{label}</p>
        <p className="relative mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
          {value}
        </p>
        {hint && (
          <p className="relative mt-3 text-sm text-white/85">{hint}</p>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
        {label}
      </p>
      <p className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
        {value}
      </p>
      {hint && <p className="mt-1 text-xs text-muted">{hint}</p>}
    </div>
  );
}

type ComparisonBarProps = {
  wasteAmount: number;
  residualAmount: number;
  residualShare: number;
};

function ComparisonBar({
  wasteAmount,
  residualAmount,
  residualShare,
}: ComparisonBarProps) {
  const residualPercent = Math.max(0, Math.min(100, residualShare));
  const beneflexWidth = `${residualPercent}%`;

  return (
    <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
        Desperdicio: modelo tradicional vs. BeneFlex
      </p>

      <div className="mt-4 space-y-4">
        <div>
          <div className="flex items-baseline justify-between text-xs">
            <span className="font-medium text-foreground">Modelo tradicional</span>
            <span className="font-semibold text-foreground">
              {copFormatter.format(wasteAmount)}
            </span>
          </div>
          <div
            className="mt-1.5 h-3 w-full overflow-hidden rounded-full bg-border"
            role="img"
            aria-label={`Modelo tradicional: ${copFormatter.format(wasteAmount)} de desperdicio mensual`}
          >
            <div className="h-full w-full rounded-full bg-gradient-to-r from-amber-300 to-orange-400" />
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between text-xs">
            <span className="font-medium text-foreground">Con BeneFlex</span>
            <span className="font-semibold text-primary">
              {copFormatter.format(residualAmount)}
            </span>
          </div>
          <div
            className="mt-1.5 h-3 w-full overflow-hidden rounded-full bg-border"
            role="img"
            aria-label={`Con BeneFlex: ${copFormatter.format(residualAmount)} de desperdicio mensual residual`}
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-[width] duration-300 ease-out"
              style={{ width: beneflexWidth }}
            />
          </div>
        </div>
      </div>

      <p className="mt-4 text-xs text-muted">
        BeneFlex recupera hasta el 80% del desperdicio al controlar categorías,
        comercios y horarios desde un solo panel.
      </p>
    </div>
  );
}
