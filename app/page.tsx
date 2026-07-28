export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <h1 className="text-6xl font-bold">
          📸 AyeFotos
        </h1>

        <p className="mt-6 text-2xl">
          Fotografía deportiva profesional
        </p>

        <p className="mt-4 max-w-xl text-gray-300">
          Encontrá las mejores fotos de tus partidos y guardá tus momentos inolvidables.
        </p>

        <a
  href="/partidos"
  className="rounded-full bg-white px-8 py-3 text-black"
>
  Ver partidos
</a>

        <a
  href="/registro"
  className="rounded-full border border-white px-8 py-3"
>
  Crear cuenta
</a>
        </div>

      </section>

    </main>
  );
}
