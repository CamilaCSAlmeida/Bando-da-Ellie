import Link from "next/link";

export default function QuemSomos() {
  return (
    <main style={{ textAlign: "center", padding: 20 }}>
      <h1>Quem somos 💕</h1>

      <p>Somos um grupo cheio de amor...</p>
      <p>Ellie: calopsita amarelinha</p>
      <p>Abby: calopsita branca</p>
      <p>Ada: periquito verde</p>
      <p>Aurea: periquito australiano</p>
      <p>Kratos: bico de lacre</p>

      <br />

      <Link
        href="/"
        style={{
          display: "inline-block",
          marginTop: 20,
          padding: "10px 20px",
          backgroundColor: "#d88c9a",
          color: "#fff",
          borderRadius: "20px"
        }}
      >
        ← Voltar
      </Link>
    </main>
  );
}