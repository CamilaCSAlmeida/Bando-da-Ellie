import Link from "next/link";
import Carrossel from "../components/Carrossel";

export default function Home() {
  return (
    <main>

      {/* CARROSSEL COM ALTURA FIXA */}
      <div style={{
        height: "260px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Carrossel />
      </div>

      <h1 style={{ color: "#d88c9a" }}>
        Bem-vindo ao nosso cantinho 💕
      </h1>

      <p>
        Aqui compartilhamos histórias, momentos especiais e tudo sobre o nosso bando.
      </p>

    </main>
  );
}