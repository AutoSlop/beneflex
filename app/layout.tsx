import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BeneFlex — Una sola tarjeta Visa digital para beneficios de empresa",
  description:
    "SaaS fintech B2B en Colombia. Una tarjeta Visa digital con multi-bolsillo para asignar alimentación, transporte, salud y educación con control en tiempo real.",
  keywords: [
    "beneficios laborales",
    "tarjeta digital Colombia",
    "multi-bolsillo",
    "fintech B2B",
    "RRHH",
    "alimentación",
    "transporte",
    "salud",
    "educación",
  ],
  openGraph: {
    title: "BeneFlex — Una sola tarjeta Visa digital para beneficios de empresa",
    description:
      "Asigna alimentación, transporte, salud o educación en bolsillos separados con reglas programables y control en tiempo real.",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
