import Link from "next/link";

export default function QuemSomos() {
  return (
    <main style={{ textAlign: "center", padding: 20 }}>
      <h1>Quem somos 💕</h1>

      <p>Somos um grupo cheio de amor...</p>
      <p>Ellie: Uma calopsita amarela</p>
      <p>Abby: É uma calopsita branca com manchinhas cinza</p>
      <p>Ada: Uma periquito verde</p>
      <p>Aurea: É uma periquito australiano</p>
      <p>Kratos: Um bico de lacre</p>

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