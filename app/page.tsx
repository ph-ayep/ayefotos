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

        <div className="mt-8 flex gap-4">
          <button className="rounded-full bg-white px-8 py-3 text-black">
            Ver partidos
          </button>

          <button className="rounded-full border border-white px-8 py-3">
            Crear cuenta
          </button>
        </div>

      </section>

    </main>
  );
}
