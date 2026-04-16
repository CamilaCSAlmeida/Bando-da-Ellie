import Carrossel from "../components/Carrossel";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(180deg, #fff0f3, #fce4ec)",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <Carrossel />

      <h1
        style={{
          color: "#d88c9a",
          fontSize: "2.2rem",
          marginTop: "20px",
        }}
      >
        Bem-vindo ao nosso cantinho 💕
      </h1>

      <p
        style={{
          maxWidth: "500px",
          marginTop: "10px",
          color: "#555",
          fontSize: "1.1rem",
          lineHeight: "1.6",
        }}
      >
        Aqui compartilhamos histórias, momentos especiais e tudo sobre o nosso bando.
      </p>
    </main>
  );
}