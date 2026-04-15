import Link from "next/link";

export default function Rotina() {
  return (
    <main style={{ textAlign: "center", padding: 20 }}>
      <h1>Rotina 💕</h1>

      <p>O bando tem uma rotina bem rígida. Todos acordam as oito da manhã.</p>
        <p>Recebem carinho e atenção por umas duas horas de seus tutores 
        depois são separadas em dois grupos para não brigarem.</p>
        <p>Passam o resto do dia com suas respectivas alimentações, 
        água e brinquedos a disposição.</p>
        <p>Às 18h todos vão para o quarto para dormirem.💛</p>

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