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
export default async function Partido({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main>
      <h1>Partido {id}</h1>
      <p>Aquí irá la información del partido.</p>
    </main>
  );
}
