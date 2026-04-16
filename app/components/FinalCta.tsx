"use client";

import { useState } from "react";

export default function FinalCta() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    size: "100–300",
  });

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // No backend — purely front-end demo UX.
    if (typeof window !== "undefined") {
      try {
        const stored = JSON.parse(
          window.localStorage.getItem("beneflex_demo_requests") ?? "[]"
        );
        stored.push({ ...form, at: new Date().toISOString() });
        window.localStorage.setItem(
          "beneflex_demo_requests",
          JSON.stringify(stored)
        );
      } catch {
        // ignore storage errors
      }
    }
    setSent(true);
  }

  return (
    <section id="demo" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-dark via-primary to-secondary p-8 shadow-xl sm:p-12">
          <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-black/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div className="text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                Listo para comenzar
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Unifica los beneficios de tu empresa en una sola Visa digital
              </h2>
              <p className="mt-4 max-w-lg text-white/80">
                Agenda una demo de 30 minutos. Te mostramos el panel, un
                ejemplo de programa con bolsillos y el flujo de conciliación
                adaptado a tu equipo.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-white/85">
                {[
                  "Sin compromiso de compra",
                  "Simulación con datos de tu empresa",
                  "Cotización dentro de la misma sesión",
                ].map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/15">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-surface p-6 shadow-lg sm:p-7">
              {sent ? (
                <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    ¡Listo! Recibimos tu solicitud
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    Un especialista de BeneFlex te contactará en menos de 24
                    horas hábiles para coordinar la demo.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Solicitar demo
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Nombre" htmlFor="name">
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        placeholder="Nombre y apellido"
                        className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
                      />
                    </Field>
                    <Field label="Empresa" htmlFor="company">
                      <input
                        id="company"
                        type="text"
                        required
                        value={form.company}
                        onChange={(e) =>
                          setForm({ ...form, company: e.target.value })
                        }
                        placeholder="Razón social"
                        className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
                      />
                    </Field>
                  </div>
                  <Field label="Correo corporativo" htmlFor="email">
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="tu.nombre@empresa.co"
                      className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
                    />
                  </Field>
                  <Field label="Número de empleados" htmlFor="size">
                    <select
                      id="size"
                      value={form.size}
                      onChange={(e) =>
                        setForm({ ...form, size: e.target.value })
                      }
                      className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground focus:border-primary focus:outline-none"
                    >
                      <option>Menos de 100</option>
                      <option>100–300</option>
                      <option>300–500</option>
                      <option>Más de 500</option>
                    </select>
                  </Field>
                  <button
                    type="submit"
                    className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-primary-dark hover:shadow-lg"
                  >
                    Agendar demo
                  </button>
                  <p className="text-center text-[11px] text-muted">
                    Al enviar aceptas ser contactado por el equipo comercial de
                    BeneFlex.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted">
        {label}
      </span>
      {children}
    </label>
  );
}
