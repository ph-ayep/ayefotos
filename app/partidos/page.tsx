import Link from "next/link";

export default function PartidosPage() {
  const partidos = [
    { id: "1", titulo: "River vs Boca" },
    { id: "2", titulo: "Argentina vs Brasil" },
  ];

  return (
    <main>
      <h1>Partidos</h1>

      <ul>
        {partidos.map((partido) => (
          <li key={partido.id}>
            <Link href={`/partidos/${partido.id}`}>
              {partido.titulo}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
