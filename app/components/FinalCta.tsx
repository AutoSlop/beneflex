"use client";

import { useState } from "react";

const DEMO_ENDPOINT = "/api/demo-request";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "loading" | "success" | "error";

export default function FinalCta() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{
    company?: string;
    email?: string;
    employees?: string;
  }>({});
  const [form, setForm] = useState({
    company: "",
    email: "",
    employees: "",
  });

  function validate() {
    const errors: typeof fieldErrors = {};
    if (!form.company.trim()) {
      errors.company = "El nombre de la empresa es obligatorio.";
    }
    if (!form.email.trim()) {
      errors.email = "El correo corporativo es obligatorio.";
    } else if (!EMAIL_RE.test(form.email.trim())) {
      errors.email = "Ingresa un correo corporativo válido.";
    }
    const employeesNum = Number(form.employees);
    if (form.employees.trim() === "") {
      errors.employees = "El número de empleados es obligatorio.";
    } else if (!Number.isFinite(employeesNum) || employeesNum <= 0) {
      errors.employees = "Debe ser un número mayor a 0.";
    }
    return errors;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage(null);

    const errors = validate();
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      setStatus("error");
      setErrorMessage("Revisa los campos marcados y vuelve a intentarlo.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch(DEMO_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company: form.company.trim(),
          email: form.email.trim(),
          employees: Number(form.employees),
        }),
      });

      const data = (await res.json().catch(() => null)) as
        | {
            ok?: boolean;
            error?: string;
            message?: string;
            fields?: Record<string, string>;
          }
        | null;

      if (!res.ok || !data?.ok) {
        if (data?.fields) setFieldErrors(data.fields);
        setStatus("error");
        setErrorMessage(
          data?.message ??
            "No pudimos enviar tu solicitud. Intenta nuevamente en unos minutos."
        );
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage(
        "Error de red al contactar /api/demo-request. Verifica tu conexión e intenta nuevamente."
      );
    }
  }

  const isLoading = status === "loading";

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
              {status === "success" ? (
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
                  <p className="mt-3 text-[11px] text-muted">
                    Enviado a <code className="font-mono">{DEMO_ENDPOINT}</code>
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Solicitar demo
                  </h3>

                  <Field
                    label="Nombre de la empresa"
                    htmlFor="company"
                    error={fieldErrors.company}
                  >
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      aria-invalid={Boolean(fieldErrors.company)}
                      aria-describedby={
                        fieldErrors.company ? "company-error" : undefined
                      }
                      value={form.company}
                      onChange={(e) => {
                        setForm({ ...form, company: e.target.value });
                        if (fieldErrors.company)
                          setFieldErrors({ ...fieldErrors, company: undefined });
                      }}
                      placeholder="Razón social"
                      disabled={isLoading}
                      className={`h-11 w-full rounded-xl border bg-background px-3 text-sm text-foreground placeholder:text-muted focus:outline-none disabled:opacity-60 ${
                        fieldErrors.company
                          ? "border-red-500 focus:border-red-500"
                          : "border-border focus:border-primary"
                      }`}
                    />
                  </Field>

                  <Field
                    label="Email corporativo"
                    htmlFor="email"
                    error={fieldErrors.email}
                  >
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      aria-invalid={Boolean(fieldErrors.email)}
                      aria-describedby={
                        fieldErrors.email ? "email-error" : undefined
                      }
                      value={form.email}
                      onChange={(e) => {
                        setForm({ ...form, email: e.target.value });
                        if (fieldErrors.email)
                          setFieldErrors({ ...fieldErrors, email: undefined });
                      }}
                      placeholder="tu.nombre@empresa.co"
                      disabled={isLoading}
                      className={`h-11 w-full rounded-xl border bg-background px-3 text-sm text-foreground placeholder:text-muted focus:outline-none disabled:opacity-60 ${
                        fieldErrors.email
                          ? "border-red-500 focus:border-red-500"
                          : "border-border focus:border-primary"
                      }`}
                    />
                  </Field>

                  <Field
                    label="Número de empleados"
                    htmlFor="employees"
                    error={fieldErrors.employees}
                  >
                    <input
                      id="employees"
                      name="employees"
                      type="number"
                      inputMode="numeric"
                      min={1}
                      step={1}
                      required
                      aria-invalid={Boolean(fieldErrors.employees)}
                      aria-describedby={
                        fieldErrors.employees ? "employees-error" : undefined
                      }
                      value={form.employees}
                      onChange={(e) => {
                        setForm({ ...form, employees: e.target.value });
                        if (fieldErrors.employees)
                          setFieldErrors({
                            ...fieldErrors,
                            employees: undefined,
                          });
                      }}
                      placeholder="Ej. 250"
                      disabled={isLoading}
                      className={`h-11 w-full rounded-xl border bg-background px-3 text-sm text-foreground placeholder:text-muted focus:outline-none disabled:opacity-60 ${
                        fieldErrors.employees
                          ? "border-red-500 focus:border-red-500"
                          : "border-border focus:border-primary"
                      }`}
                    />
                  </Field>

                  {status === "error" && errorMessage && (
                    <div
                      role="alert"
                      className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700"
                    >
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    aria-busy={isLoading}
                    className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-primary-dark hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="animate-spin"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                        Enviando…
                      </>
                    ) : (
                      "Agendar demo"
                    )}
                  </button>

                  <p className="text-center text-[11px] text-muted">
                    El envío se realiza mediante{" "}
                    <code className="font-mono text-primary">
                      POST {DEMO_ENDPOINT}
                    </code>
                    . Al enviar aceptas ser contactado por el equipo comercial
                    de BeneFlex.
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
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted">
        {label}
      </span>
      {children}
      {error && (
        <span
          id={`${htmlFor}-error`}
          role="alert"
          className="mt-1 block text-[11px] font-medium text-red-600"
        >
          {error}
        </span>
      )}
    </label>
  );
}
