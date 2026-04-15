import Link from "next/link";

export default function Alimentacao() {
  return (
    <main style={{ textAlign: "center", padding: 20 }}>
      <h1>Alimentação 💕</h1>

      <p>A base principal da alimentação do bando é a ração extrusada.</p>
        <p>Somente a Áurea, que foi adotada, ainda consome sementes — 
        mas em breve isso será ajustado para garantir uma alimentação 
        mais equilibrada e saudável.</p>
        <p>Como petiscos, eles adoram: ovo, couve, maçã, banana, mamão, 
        maracujá e outras delícias naturais 🐦✨</p>
        <p>Cada momento da alimentação é também uma forma de cuidado, 
        carinho e conexão com o bando 💛</p>

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