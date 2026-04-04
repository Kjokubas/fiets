import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "1rem", fontFamily: "var(--font-display)" }}>
      <h1 style={{ fontSize: "4rem", fontWeight: 800, color: "var(--color-red)" }}>404</h1>
      <p style={{ color: "var(--color-text-muted)" }}>This page doesn&#39;t exist / Deze pagina bestaat niet.</p>
      <Link href="/nl" style={{ color: "var(--color-red)", textDecoration: "underline" }}>
        Home
      </Link>
    </div>
  );
}
