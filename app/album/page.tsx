"use client";

import { useState } from "react";
import Link from "next/link";

const imagens = [
  "abby-ellie.jpg",
  "abby-perfil.jpg",
  "ada-bebe.jpg",
  "ada-perfil.jpg",
  "aurea-porta.jpeg",
  "ellie-perfil.jpg",
  "kratos-bebe.jpg",
  "kratos-cadeira.jpg"
];

export default function Album() {
  const [index, setIndex] = useState<number | null>(null);

  const proxima = () => {
    if (index !== null) {
      setIndex((index + 1) % imagens.length);
    }
  };

  const anterior = () => {
    if (index !== null) {
      setIndex((index - 1 + imagens.length) % imagens.length);
    }
  };

  return (
    <main style={{ textAlign: "center" }}>
      <h1>Álbum 💕</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: 10,
          padding: 20
        }}
      >
        {imagens.map((nome, i) => (
          <img
            key={nome}
            src={`/imagens/${nome}`}
            style={{ width: "100%", cursor: "pointer" }}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      {index !== null && (
        <div
          onClick={() => setIndex(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* BOTÃO ESQUERDA */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              anterior();
            }}
            style={{
              position: "absolute",
              left: 20,
              fontSize: "2rem",
              background: "transparent",
              color: "#fff",
              border: "none",
              cursor: "pointer"
            }}
          >
            ←
          </button>

          {/* IMAGEM */}
          <img
            src={`/imagens/${imagens[index]}`}
            style={{
              maxHeight: "80%",
              maxWidth: "90%"
            }}
            onClick={(e) => e.stopPropagation()}
          />

          {/* BOTÃO DIREITA */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              proxima();
            }}
            style={{
              position: "absolute",
              right: 20,
              fontSize: "2rem",
              background: "transparent",
              color: "#fff",
              border: "none",
              cursor: "pointer"
            }}
          >
            →
          </button>
        </div>
      )}

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