export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        padding: "50px",
      }}
    >
      <h1 style={{ fontSize: "50px" }}>
        📸 AyeFotos
      </h1>

      <h2>
        Fotografía deportiva profesional
      </h2>

      <p>
        Encontrá y comprá las mejores fotos de tus partidos.
      </p>

      <div style={{ marginTop: "40px" }}>

        <a
          href="/partidos"
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "15px 30px",
            borderRadius: "30px",
            marginRight: "15px",
            textDecoration: "none",
          }}
        >
          Ver partidos
        </a>


        <a
          href="/registro"
          style={{
            border: "1px solid white",
            color: "white",
            padding: "15px 30px",
            borderRadius: "30px",
            textDecoration: "none",
          }}
        >
          Crear cuenta
        </a>

      </div>

    </main>
  );
}
