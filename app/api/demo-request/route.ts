import type { NextRequest } from "next/server";

type DemoRequestBody = {
  company?: unknown;
  email?: unknown;
  employees?: unknown;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  let body: DemoRequestBody;
  try {
    body = (await request.json()) as DemoRequestBody;
  } catch {
    return Response.json(
      { ok: false, error: "invalid_json" },
      { status: 400 }
    );
  }

  const company =
    typeof body.company === "string" ? body.company.trim() : "";
  const email =
    typeof body.email === "string" ? body.email.trim() : "";
  const employeesRaw = body.employees;
  const employees =
    typeof employeesRaw === "number"
      ? employeesRaw
      : typeof employeesRaw === "string" && employeesRaw.trim() !== ""
        ? Number(employeesRaw)
        : NaN;

  const errors: Record<string, string> = {};
  if (!company) errors.company = "El nombre de la empresa es obligatorio.";
  if (!email || !EMAIL_RE.test(email))
    errors.email = "Ingresa un correo corporativo válido.";
  if (!Number.isFinite(employees) || employees <= 0)
    errors.employees = "Número de empleados debe ser mayor a 0.";

  if (Object.keys(errors).length > 0) {
    return Response.json(
      { ok: false, error: "validation_error", fields: errors },
      { status: 400 }
    );
  }

  // In a real deployment this would push to CRM / email. For now we log it
  // so that the operator can inspect incoming demo requests in the server log.
  console.log("[demo-request] new submission", {
    company,
    email,
    employees,
    at: new Date().toISOString(),
  });

  return Response.json(
    {
      ok: true,
      endpoint: "/api/demo-request",
      message: "Solicitud recibida correctamente.",
    },
    { status: 200 }
  );
}
