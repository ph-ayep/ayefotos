export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <h1 className="text-6xl font-bold">
          📸 AyeFotos
        </h1>

        <h2 className="mt-6 text-3xl">
          Fotografía deportiva profesional
        </h2>

        <p className="mt-4 max-w-xl text-gray-300">
          Encontrá las mejores fotos de tus partidos.
          Comprá tus recuerdos deportivos en alta calidad.
        </p>


        <img
          src="/portada.jpg"
          alt="Fotografía deportiva"
          className="mt-8 h-64 w-full max-w-2xl rounded-xl object-cover"
        />


        <div className="mt-8 flex gap-4">

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
