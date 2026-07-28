export default function Partido({
  params,
}: {
  params: { id: string };
}) {
  return (
    <main style={{ padding: "40px" }}>
      <h1>AyeFotos 📸</h1>

      <h2>Detalle del partido</h2>

      <p>ID del partido: {params.id}</p>

      <h3>Equipo A vs Equipo B</h3>

      <p>Fecha: 28/07/2026</p>

      <p>Fotos disponibles: 250</p>

      <button>
        Ver galería
      </button>
    </main>
  );
}
